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

## error:
- injection-tss-mv3.js:1 Uncaught (in promise) DataCloneError: Failed to execute 'pushState' on 'History': Location object could not be cloned.
    at l (injection-tss-mv3.js:1:1246)
    at t.<computed> [as pushState] (injection-tss-mv3.js:1:1206)
    at Object.push (react-router-dom.js?v=801a046e:629:21)
    at completeNavigation (react-router-dom.js?v=801a046e:1550:20)
    at handleLoaders (react-router-dom.js?v=801a046e:2028:7)
    at startNavigation (react-router-dom.js?v=801a046e:1810:15)
    at Object.navigate (react-router-dom.js?v=801a046e:1672:11)
    at react-router-dom.js?v=801a046e:5745:23
    at popUp (ProductCard.jsx:10:9)
    at executeDispatch (react-dom_client.js?v=801a046e:11736:11)


- An empty string ("") was passed to the src attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to src instead of an empty string