function mousebt(id1, otherIds) {
  $("#" + id1).css({
      "color": "black",
      "background-color": "white"
  });
  resetbt(otherIds);
}

function resetbt(ids) {
  $("#" + ids.join(", #")).css({
      "color": "white",
      "background-color": "gray"
  });
}