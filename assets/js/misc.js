function disableButton(id,cap){
    document.querySelector(id).disabled= true;
    document.querySelector(id).innerHTML =  "<div class='spinner-border spinner-border-sm' role='status'></div> "+cap;
}
function enableButton(id,cap){
    document.querySelector(id).disabled= false;
    document.querySelector(id).innerHTML =  cap;
}
toastr.options = {
    maxOpened: 1,
    autoDismiss: !0,
    closeButton: 0,
    debug: 0,
    newestOnTop: 0,
    progressBar: 1,
    positionClass: "toast-top-right",
    preventDuplicates: 0,
    onclick: null,
    rtl: 1
}