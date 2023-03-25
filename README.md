Carousel Single Array
===
```
Dato un array contenente una lista di cinque immagini, creare un carosello.
```
---
## Milestone #1
>Per prima cosa, creare il `markup` statico: costruire il container e inserire un’immagine grande al centro: si avrà così la struttura base e gli stili pronti concentrarsi sull’aspetto logico.

## Milestone #2
>Rimuovere tutto il markup statico e inserire tutte le immagini dinamicamente servendosi dell’`array` fornito e un semplice `ciclo for` che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci si ritroverà con lo stesso slider stilato nella milestone #1, ma costruito dinamicamente attraverso `JavaScript`.

## Milestone #3
>Al `click` dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

## Bonus #1
>Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

## Bonus #2
>Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

### Linguaggi utilizzati
---
- `html`
- `js`
- `css`


### Advices
---
- Costruire una versione statica del carosello contenente solo un’immagine. Di questa versione statica al momento opportuno commentare/oscurare alcuni elementi per poterli riprodurre dinamicamente in `js`. (Potendo quindi usarli come “template”);
- Scrivere sempre prima per punti il nostro algoritmo in italiano per capire cosa si intende fare;
- Al momento giusto rispondere a questa domanda: “Quanti cicli servono?”.


<!-- ## Dataset Preparation
| Dataset | Download |
| ---     | ---   |
| dataset-A | [download]() |
| dataset-B | [download]() |
| dataset-C | [download]() |

## Use
- for train
  ```
  python train.py
  ```
- for test
  ```
  python test.py
  ```
## Pretrained model
| Model | Download |
| ---     | ---   |
| Model-1 | [download]() |
| Model-2 | [download]() |
| Model-3 | [download]() |


## Directory Hierarchy
```
|—— assets
|    |—— css
|    |—— img
|        |—— 01.webp
|        |—— 02.webp
|        |—— 03.webp
|        |—— 04.webp
|        |—— 05.webp
|    |—— js
```
## Code Details
### Tested Platform
- software
  ```
  OS: Debian unstable (May 2021), Ubuntu LTS
  Python: 3.8.5 (anaconda)
  PyTorch: 1.7.1, 1.8.1
  ```
- hardware
  ```
  CPU: Intel Xeon 6226R
  GPU: Nvidia RTX3090 (24GB)
  ```
### Hyper parameters
```
```
## References
- [paper-1]()
- [paper-2]()
- [code-1](https://github.com)
- [code-2](https://github.com)
  
## License

## Citing
If you use xxx,please use the following BibTeX entry.
```
``` -->
