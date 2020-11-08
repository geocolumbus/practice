const CopyWebpackPlugin=require("copy-webpack-plugin")

module.exports={
   plugins: [
      new CopyWebpackPlugin([{
         context:"./src", from:"*.html"
      }])
   ]
}
