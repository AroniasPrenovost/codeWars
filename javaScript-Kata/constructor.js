// Note: I didn't write this code, I just kept it for reference... 
// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage );  
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var pagecount = this.pageCount();
  if(pageIndex < 0 || pageIndex >= pagecount) return -1;
  if(pageIndex == pagecount - 1) {
    return this.itemCount() - Math.floor((this.itemCount() / this.itemsPerPage)) * this.itemsPerPage;
  }
  return this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  var page = Math.floor(itemIndex / this.itemsPerPage);
  if(page >= this.pageCount() || page < 0)
    return -1;
  return page;
}