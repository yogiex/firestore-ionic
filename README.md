### Readme ionic with firebase database( type angular)
start dengan memulai project ionic 

```sh
ionic start firebase-ionic --type=angular --capacitor
```

## firebase
Masuk ke website firebase
![](./img/Screenshot_20220322_105643.png)

Lalu pergi ke bagian console untuk membuat project

![](./img/Screenshot_20220322_105840.png)

Tambah project 

![](./img/Screenshot_20220322_105918.png)
![](./img/Screenshot_20220322_110033.png)

Disable google analytics

![](./img/Screenshot_20220322_110107.png)

Jika sudah create project lalu tunggu project firebase dibuat.

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

### Tampilan UI
Tampilan awal

![](./img/Screenshot_20220322_213652.png)

Tampilan tambah Note
![](./img/Screenshot_20220322_213816.png)

Tampilan detail note
![](./img/Screenshot_20220322_213709.png)

Tampilan delete note
![](./img/Screenshot_20220322_213800.png)


### End-to-End testing menggunakan cypress
