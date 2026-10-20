# Módulo 8 - Cloud

## Enlaces

[Repositorio GitHub](https://github.com/josemi1189/mod8-cloud-github-pages-manual)

[GitHub Pages](https://josemi1189.github.io/mod8-cloud-github-pages-manual/)

## Desplegar en Github Pages de forma manual.

1. Creamos nuestro repositorio en **GitHub** y lo enlazamos con nuestra carpeta local.
2. Instalamos dependencias: `pnpm ci`.
3. Generamos una nueva rama que deberá llamarse `gh-pages`.
4. Generamos una build: `pnpm run build`.
5. En esta rama debemos dejar solo el contenido de la carpeta `/dist` creada en la **build**, eliminando el resto de archivos y carpetas y dejando su contenido en la raíz del repositorio.

   ![Build](docs/build.jpg)

6. Publicamos la rama en GitHub y subimos su contenido.

   ![Repositorio GitHub](docs/github.jpg)

7. Una vez subido, creará un flujo de trabajo o workflow de forma automática, la cual podemos ver su proceso desde `Actions`.

   ![Actions](docs/actions.jpg)

8. Una vez completada la tarea, nos genera la URL publicada que también podremos ver en el repositorio de GitHub.

   ![Deployments URL](docs/deploy.jpg)

> Si al cargar la página se queda en blanco, podremos comprobar que no encuentra los archivos .css y .js.

Para solucionar este problema:

- Indicar que utilice la ruta relativa en el archivo de configuración de Vite `vite.config.ts`. En este caso, al utilizar una subruta debemos indicar el nombre de la subruta para que genere la url de las imágenes correctamente:

  ```ts
  export default defineConfig({
    base: "/mod8-cloud-github-pages-manual/",
    plugins: [tsConfigPaths(), checker({ typescript: true }), react()],

    [...]
  })
  ```

- Generar nueva build y subir los archivos generados en la rama `gh-pages`.

<br>

---

**IMPORTANTE**

Para posteriores modificaciones, se generará la build desde la rama main y podemos pasar los archivos necesarios a `gh-pages` de forma manual copiando los archivos en local, cambiando de rama y pasando de nuevo los archivos al repositorio para que se carguen en la rama de despliegue.
