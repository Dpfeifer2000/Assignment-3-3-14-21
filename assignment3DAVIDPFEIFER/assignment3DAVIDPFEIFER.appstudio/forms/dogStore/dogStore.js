let product = ["Crocheted dog toy", "Slow feeder bowl", "Pawz grey treat jar", "Blue sweet dream thermal pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let prices = [10, 14, 20, 30, 32, 27, 12, 27]
let items = []
let wishList = []

bISInventory.oneclick = function() {
  for (i=0; i<= product.length; i++)
    items.push('${product[i]} : ${price[i]}') 
    }
    lblInventory.value = '${items}'
    
bISWishlist.oneclick = function() {
  wantItem = inptItemSearch.value
  wishList.push(wantItem)
  lblInventory.value = '${items}'
  }
  