### Readme ionic with firebase database( type angular)
start dengan memulai project ionic 

```sh
ionic start firebase-ionic --type=angular --capacitor
```

## firebase
Masuk ke website firebase
![](./img/Screenshot_20220322_105643.png)

lalu pergi ke bagian console untuk membuat project
![](./img/Screenshot_20220322_105840.png)

tambah project 
![](./img/Screenshot_20220322_105918.png)
![](./img/Screenshot_20220322_110033.png)

disable google analytics
![](./img/Screenshot_20220322_110107.png)

jika sudah create project lalu tunggu project firebase dibuat
![](./img/Screenshot_20220322_110243.png)
![](./img/Screenshot_20220322_110331.png)

## Tampilan dashboard project firebase
![](./img/Screenshot_20220322_110359.png)

jika sudah pilih bagian web untuk melihat membuat key dari web app yang dibuat
![](./img/Screenshot_20220322_105522.png)


## Package
tambahkan angular fire dalam project ionic

```sh
ng add @angular/fire
```


## import module angular/fire
Import module @angular/fire pada app.module.ts

```typescript
    import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
    import { getFirestore, provideFirestore } from '@angular/fire/firestore'
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
```