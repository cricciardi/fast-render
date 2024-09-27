# FastRender

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## ABSTRACT
Questo lavoro si concentra sull'importanza cruciale dell'ottimizzazione delle prestazioni web, in particolare attraverso l'uso di tecniche avanzate di sviluppo software. Con il miglioramento continuo dell'hardware, diventa fondamentale adottare strategie software altrettanto ottimizzate per garantire esperienze utente fluide e reattive. Le prestazioni di un sito web influenzano direttamente il comportamento degli utenti, con studi che indicano che oltre il 70% di essi abbandona i siti con tempi di caricamento eccessivi. La nostra analisi si concentra sull'ottimizzazione del **bundle** JavaScript utilizzando il framework Angular, integrando tecniche come **Deferrable Views**, **Lazy Loading**, **Preloading Strategy**, **Standalone Components** e **Code Splitting**. Attraverso casi di studio concreti, abbiamo sviluppato progetti caratterizzati dall'uso intensivo di API complesse, dimostrando come tali tecniche riducano significativamente i tempi di caricamento e migliorino metriche chiave come il **Largest Contentful Paint** (LCP) e il **First Input Delay** (FID). Strumenti di analisi come il **Coverage Panel** e il **treeMap chart** sono stati impiegati per un'analisi dettagliata del codice, evidenziando il miglioramento del rapporto tra codice utilizzato e byte trasmessi. I risultati ottenuti mostrano miglioramenti prestazionali significativi, con incrementi fino al 1000% in specifiche sezioni ottimizzate dell’applicazione, confermando l'importanza dell'ottimizzazione del bundle per ridurre il carico sul browser e migliorare l’esperienza utente.

## ESBUILD ANALYZER
eseguire la build (esempio: npm run build:esbuild:unoptimized), prendere il file stats.json presente nella cartella dist e caricarlo su:
https://esbuild.github.io/analyze/
