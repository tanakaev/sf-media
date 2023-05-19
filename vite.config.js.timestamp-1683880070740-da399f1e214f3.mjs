// vite.config.js
import { defineConfig } from "file:///E:/Kunden/sfmedia1.0/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Kunden/sfmedia1.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePluginFonts } from "file:///E:/Kunden/sfmedia1.0/node_modules/vite-plugin-fonts/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          "Montserrat",
          "Poppins"
        ]
      },
      format: "woff2",
      preload: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxLdW5kZW5cXFxcc2ZtZWRpYTEuMFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcS3VuZGVuXFxcXHNmbWVkaWExLjBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0t1bmRlbi9zZm1lZGlhMS4wL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCB7IFZpdGVQbHVnaW5Gb250cyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWZvbnRzJ1xuXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBWaXRlUGx1Z2luRm9udHMoe1xuICAgIGdvb2dsZToge1xuICAgICAgZmFtaWxpZXM6IFtcbiAgICAgICAgJ01vbnRzZXJyYXQnLFxuICAgICAgICAnUG9wcGlucycsXG4gICAgICBdXG4gICAgfSxcbiAgICBmb3JtYXQ6ICd3b2ZmMicsXG4gICAgcHJlbG9hZDogdHJ1ZSxcbiAgfSksXG5dXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxTQUFTLG9CQUFvQjtBQUNqUixPQUFPLFdBQVc7QUFDbEIsU0FBUyx1QkFBdUI7QUFJaEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sZ0JBQWdCO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQ0EsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
