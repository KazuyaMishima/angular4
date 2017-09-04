```
 npm start

 // basic
 ng g m views/home
 ng g c views/home/home --flat --export
 
 // delegated
 ng g m views/about --routing
 ng g c views/about/about --flat

 // lazy
 ng g m views/operations --routing
 ng g c views/operations/operations --flat

 // nested
 ng g c views/operations/new
 ng g c views/operations/list

 // params
 ng g c views/operations/item

```