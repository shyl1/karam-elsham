# installing dependencies
- reactjs 
- react-router-dom
- tailwind css
- path alias 
- redux toolkit
- react-query
- axios
- svgr vite plugin

## using i18n tarnslation library 
for encypting and clean --> npm install --save-dev cross-env
- adding node globals in eslint.config.js
- wrapped the env vars in scripts/download.js
- sync translation in local with loclize by npm run dowmload command 
- i18next-http-backend package. -> npm install i18next-http-backend


#supabase problem
- when i tried to fetch data it gave me an [] and error null which the cause of it i didnt write a POlicy 


## query
- queryFn: fetchProductsBasedCategory(categoryId),
 - the error queryFn is not a function
 - immediately invoking fetchProductsBasedCategory, so instead of passing a function to queryFn, you're passing the result of the function (which is a Promise, not a function).


