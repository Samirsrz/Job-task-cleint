import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCUFxr_4DWQzFwQq9lRpC6OskCx5hGldS4',
  authDomain: 'product-service-8a4f9.firebaseapp.com',
  projectId: 'product-service-8a4f9',
  storageBucket:'product-service-8a4f9.appspot.com',
  messagingSenderId: '937856264194',
  appId: '1:937856264194:web:336b34da827f22781f1f1b',
}

export const app = initializeApp(firebaseConfig)