(function (global) {
  class LatLngBounds {
    constructor(points = []) {
      this.minLat = Infinity;
      this.maxLat = -Infinity;
      this.minLng = Infinity;
      this.maxLng = -Infinity;
      points.forEach((point) => this.extend(point));
    }

    extend(input) {
      if (!input) return this;
      if (input instanceof LatLngBounds) {
        this.extend([input.minLat, input.minLng]);
        this.extend([input.maxLat, input.maxLng]);
        return this;
      }

      if (Array.isArray(input[0])) {
        input.forEach((pt) => this.extend(pt));
        return this;
      }

      const [lat, lng] = input;
      this.minLat = Math.min(this.minLat, lat);
      this.maxLat = Math.max(this.maxLat, lat);
      this.minLng = Math.min(this.minLng, lng);
      this.maxLng = Math.max(this.maxLng, lng);
      return this;
    }
  }

  class TileLayer {
    constructor(urlTemplate, options = {}) {
      this.urlTemplate = urlTemplate;
      this.options = options;
      this.pane = "base";
      this.element = document.createElement("div");
      this.element.className = "leaflet-tile-layer";
      this.element.title = options.attribution || "";
    }

    addTo(map) {
      this.map = map;
      map.addLayer(this);
      return this;
    }

    render() {
      // No-op: the background is purely decorative.
    }
  }

  class RectangleLayer {
    constructor(bounds, options = {}) {
      this.bounds = bounds;
      this.options = { ...options };
      this.element = document.createElement("div");
      this.element.className = "leaflet-rectangle";
      this.listeners = {};
      this.setStyle(options);
    }

    setStyle(style = {}) {
      this.options = { ...this.options, ...style };
      const { color = "#64748b", weight = 1, fillColor = "#e2e8f0", fillOpacity = 1 } = this.options;
      if (this.element) {
        this.element.style.borderColor = color;
        this.element.style.borderWidth = `${weight}px`;
        this.element.style.backgroundColor = fillColor;
        this.element.style.opacity = fillOpacity;
      }
      return this;
    }

    on(event, handler) {
      this.listeners[event] = handler;
      if (this.element && handler) {
        const wrap = (domEvent) => {
          const parentBox = this.map.container.getBoundingClientRect();
          const containerPoint = {
            x: domEvent.clientX - parentBox.left,
            y: domEvent.clientY - parentBox.top
          };
          handler({ containerPoint });
        };

        this.element.addEventListener(event, wrap);
      }
      return this;
    }

    addTo(map) {
      this.map = map;
      map.addLayer(this);
      return this;
    }

    render() {
      if (!this.map || !this.map.bounds) return;
      const box = this.map.projectBounds(this.bounds);
      this.element.style.left = `${box.left}px`;
      this.element.style.top = `${box.top}px`;
      this.element.style.width = `${box.right - box.left}px`;
      this.element.style.height = `${box.bottom - box.top}px`;
    }
  }

  class SimpleMap {
    constructor(container, options = {}) {
      this.container = container;
      this.options = options;
      this.bounds = null;
      this.padding = [0, 0];
      this.overlays = [];

      this.container.classList.add("leaflet-container");

      this.basePane = document.createElement("div");
      this.basePane.className = "leaflet-base-pane";

      this.overlayPane = document.createElement("div");
      this.overlayPane.className = "leaflet-overlay-pane";

      this.container.appendChild(this.basePane);
      this.container.appendChild(this.overlayPane);

      window.addEventListener("resize", () => this.render());
    }

    addLayer(layer) {
      if (layer.pane === "base") {
        this.basePane.appendChild(layer.element);
      } else {
        this.overlayPane.appendChild(layer.element);
        this.overlays.push(layer);
      }

      layer.map = this;
      if (typeof layer.render === "function") {
        layer.render();
      }
      return layer;
    }

    fitBounds(bounds, { padding = [0, 0] } = {}) {
      this.bounds = bounds instanceof LatLngBounds ? bounds : new LatLngBounds(bounds);
      this.padding = padding;
      this.render();
    }

    projectLatLng(lat, lng) {
      if (!this.bounds) return { x: 0, y: 0 };
      const width = this.container.clientWidth || 1;
      const height = this.container.clientHeight || 1;
      const [padX, padY] = this.padding;

      const lngSpan = this.bounds.maxLng - this.bounds.minLng || 1;
      const latSpan = this.bounds.maxLat - this.bounds.minLat || 1;

      const x = padX + ((lng - this.bounds.minLng) / lngSpan) * (width - padX * 2);
      const y = padY + ((this.bounds.maxLat - lat) / latSpan) * (height - padY * 2);
      return { x, y };
    }

    projectBounds(bounds) {
      const [southWest, northEast] = bounds;
      const p1 = this.projectLatLng(southWest[0], southWest[1]);
      const p2 = this.projectLatLng(northEast[0], northEast[1]);
      return {
        left: Math.min(p1.x, p2.x),
        right: Math.max(p1.x, p2.x),
        top: Math.min(p1.y, p2.y),
        bottom: Math.max(p1.y, p2.y)
      };
    }

    render() {
      this.overlays.forEach((layer) => layer.render && layer.render());
    }
  }

  const L = {
    map: (container, options) => new SimpleMap(container, options),
    tileLayer: (url, options) => new TileLayer(url, options),
    rectangle: (bounds, options) => new RectangleLayer(bounds, options),
    latLng: (lat, lng) => [lat, lng],
    latLngBounds: (points) => new LatLngBounds(points),
  };

  global.L = L;
})(window);
