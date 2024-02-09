
# Expo QR boilerplate

QR code reader boilerplate with Expo.

💻作成者側環境
node v20.10.0
ruby v3.2.2
xcode v15.2


### 起動方法
```bash
$ npm install
$ npx expo run:ios --device
```
⚠️`expo-router`を使っているためApp.tsxではなく`./app/index.tsx`がエントリーポイントです。

### Icon library
https://oblador.github.io/react-native-vector-icons/

### State manager
zustand
src/stores/store.tsx

### other commands
バージョンアップに伴い、コマンドが複数存在するが、基本的には開発は上記のコマンドで問題ないはず。

```bash
$ npm run android
$ npm run ios
//$ npm run web
npx expo start
npx expo start --android,
npx expo start --ios,
npx expo start --web
npx expo run:android
npx expo run:ios
npx expo run:ios --device
eas build --platform ios --local

キャッシュをクリアして起動
npx expo start -c

npx expo prebuild 