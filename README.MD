video URL: https://drive.google.com/file/d/1yekodmUfwI13FBos2LzOqXR52nTIDNOT/view?usp=drivesdk

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd TOKEN_MINT
$ npm install
```
### 3. Connect development blockchain accounts to Metamask
- Set the Private key And URL of ROPSTEN network (You will find the URL in infura's Endpoints ) in hardhat.config.js  


### 5. Migrate Smart Contracts
`npx hardhat run src/backend/scripts/deploy.js --network Ropsten`

### 6. Run Tests
`$ npx hardhat test`

### 7. Launch Frontend
`$ yarn start`

### You can find Snapshots of output in Sample folder 
