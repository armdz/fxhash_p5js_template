rename index.html index_o.html
copy index_r.html index.html
tar -a -c -f app.zip assets src/utils.js src/sketch.js src/lib/p5.min.js index.html style.css
copy index_o.html index.html
del index_o.html