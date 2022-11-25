<!-- # Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
``` -->

# Tweet Ni
This is a dapp (decentralized web application) allows user to post,
 edit and delete tweet. And prevent users for modifying others data. 
 This application is built on solidity over hardhat framework. 
 And uses etherium for making transaction on contract.

### Pre requisites
- Node js 
- Node version manager 
- Git
- GitHub repository
- VS code 
- Hardhat framework


## API Reference

#### Add Tweets

```http
  POST addTwitter
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_tweetmsg` | `string` | **Required**. message tweeted |
| `_nickName` | `string` | **Required**. nick name of the  |
| `_address` | `address` | **Required**. address of the user |
| `_uniqid` | `uint` | **Required**. unique identifier time stamp  |


#### edit all Tweets

```http
  PATCH replace
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_msg` | `string` | **Required**. message tweeted |
| `_newmsg` | `string` | **Required**. nick name of the  |
| `_unicid` | `uint` | **Required**. address of the user |




#### Get all Tweets

```http
  GET  getResult
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `null` | `null` | `null` |




#### Delete Single Tweets

```http
  DELETE remove
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `index` | `string` | **Required**. unique identifier time stamp  |





## Authors

- [@ramyaradjesh](https://www.github.com/ramyaradjesh)
- [@Mugilan-Mourougayen](https://github.com/Mugilan-Mourougayen)
- [@sannalamani](https://www.github.com/sannalamani)
- [@kanimozhii](https://www.github.com/kanimozhii)
- [@rasaratnam-dinesh](https://www.github.com/rasaratnam-dinesh)


## Installation

Install my-project with npm
```bash
  npm  i 
  npx hardhat compile
  npx hardhat node
```
#### Seperate terminal


```bash
npx hardhat run scripts/deploy.js  --network localhost

```
    