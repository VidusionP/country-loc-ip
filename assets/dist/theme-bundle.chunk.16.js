webpackJsonp([16],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_manager__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_nod__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wishlist__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_form_validation__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_state_country__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_form_utils__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Account=function(_PageManager){_inherits(Account,_PageManager);function Account(){_classCallCheck(this,Account);var _this=_possibleConstructorReturn(this,_PageManager.call(this));_this.$state=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('[data-field-type="State"]');_this.$body=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('body');return _this}Account.prototype.loaded=function loaded(next){var $editAccountForm=Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('form[data-edit-account-form]');var $addressForm=Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('form[data-address-form]');var $inboxForm=Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('form[data-inbox-form]');var $accountReturnForm=Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('[data-account-return-form]');var $reorderForm=Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('[data-account-reorder-form]');var $invoiceButton=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('[data-print-invoice]');// Injected via template
this.passwordRequirements=this.context.passwordRequirements;// Instantiates wish list JS
this.wishlist=new __WEBPACK_IMPORTED_MODULE_3__wishlist__["default"];if($editAccountForm.length){this.registerEditAccountValidation($editAccountForm);if(this.$state.is('input')){Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["c" /* insertStateHiddenField */])(this.$state)}}if($invoiceButton.length){$invoiceButton.on('click',function(){var left=window.screen.availWidth/2-450;var top=window.screen.availHeight/2-320;var url=$invoiceButton.data('print-invoice');window.open(url,'orderInvoice','width=900,height=650,left='+left+',top='+top+',scrollbars=1')})}if($addressForm.length){this.initAddressFormValidation($addressForm);if(this.$state.is('input')){Object(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["c" /* insertStateHiddenField */])(this.$state)}}if($inboxForm.length){this.registerInboxValidation($inboxForm)}if($accountReturnForm.length){this.initAccountReturnFormValidation($accountReturnForm)}if($reorderForm.length){this.initReorderForm($reorderForm)}this.bindDeleteAddress();next()};/**
     * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
     */Account.prototype.bindDeleteAddress=function bindDeleteAddress(){__WEBPACK_IMPORTED_MODULE_1_jquery___default()('[data-delete-address]').on('submit',function(event){var message=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(event.currentTarget).data('delete-address');if(!window.confirm(message)){event.preventDefault()}})};Account.prototype.initReorderForm=function initReorderForm($reorderForm){var _this2=this;$reorderForm.on('submit',function(event){var $productReorderCheckboxes=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('.account-listItem .form-checkbox:checked');var submitForm=false;$reorderForm.find('[name^="reorderitem"]').remove();$productReorderCheckboxes.each(function(index,productCheckbox){var productId=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(productCheckbox).val();var $input=__WEBPACK_IMPORTED_MODULE_1_jquery___default()('<input>',{type:'hidden',name:'reorderitem['+productId+']',value:'1'});submitForm=true;$reorderForm.append($input)});if(!submitForm){event.preventDefault();__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({text:_this2.context.selectItem,type:'error'})}})};Account.prototype.initAddressFormValidation=function initAddressFormValidation($addressForm){var validationModel=Object(__WEBPACK_IMPORTED_MODULE_4__common_form_validation__["a" /* default */])($addressForm);var stateSelector='form[data-address-form] [data-field-type="State"]';var $stateElement=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(stateSelector);var addressValidator=Object(__WEBPACK_IMPORTED_MODULE_2__common_nod__["a" /* default */])({submit:'form[data-address-form] input[type="submit"]'});addressValidator.add(validationModel);if($stateElement){var $last=void 0;// Requests the states for a country with AJAX
Object(__WEBPACK_IMPORTED_MODULE_5__common_state_country__["a" /* default */])($stateElement,this.context,function(err,field){if(err){throw new Error(err)}var $field=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(field);if(addressValidator.getStatus($stateElement)!=='undefined'){addressValidator.remove($stateElement)}if($last){addressValidator.remove($last)}if($field.is('select')){$last=field;__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setStateCountryValidation(addressValidator,field)}else{__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].cleanUpStateValidation(field)}})}$addressForm.submit(function(event){addressValidator.performCheck();if(addressValidator.areAll('valid')){return}event.preventDefault()})};Account.prototype.initAccountReturnFormValidation=function initAccountReturnFormValidation($accountReturnForm){var errorMessage=$accountReturnForm.data('account-return-form-error');$accountReturnForm.submit(function(event){var formSubmit=false;// Iterate until we find a non-zero value in the dropdown for quantity
__WEBPACK_IMPORTED_MODULE_1_jquery___default()('[name^="return_qty"]',$accountReturnForm).each(function(i,ele){if(parseInt(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(ele).val(),10)!==0){formSubmit=true;// Exit out of loop if we found at least one return
return true}});if(formSubmit){return true}__WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({text:errorMessage,type:'error'});return event.preventDefault()})};Account.prototype.registerEditAccountValidation=function registerEditAccountValidation($editAccountForm){var validationModel=Object(__WEBPACK_IMPORTED_MODULE_4__common_form_validation__["a" /* default */])($editAccountForm);var formEditSelector='form[data-edit-account-form]';var editValidator=Object(__WEBPACK_IMPORTED_MODULE_2__common_nod__["a" /* default */])({submit:'${formEditSelector} input[type="submit"]'});var emailSelector=formEditSelector+' [data-field-type="EmailAddress"]';var $emailElement=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(emailSelector);var passwordSelector=formEditSelector+' [data-field-type="Password"]';var $passwordElement=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(passwordSelector);var password2Selector=formEditSelector+' [data-field-type="ConfirmPassword"]';var $password2Element=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(password2Selector);var currentPasswordSelector=formEditSelector+' [data-field-type="CurrentPassword"]';var $currentPassword=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(currentPasswordSelector);// This only handles the custom fields, standard fields are added below
editValidator.add(validationModel);if($emailElement){editValidator.remove(emailSelector);__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setEmailValidation(editValidator,emailSelector)}if($passwordElement&&$password2Element){editValidator.remove(passwordSelector);editValidator.remove(password2Selector);__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["a" /* Validators */].setPasswordValidation(editValidator,passwordSelector,password2Selector,this.passwordRequirements,true)}if($currentPassword){editValidator.add({selector:currentPasswordSelector,validate:function validate(cb,val){var result=true;if(val===''&&$passwordElement.val()!==''){result=false}cb(result)},errorMessage:this.context.currentPassword})}editValidator.add([{selector:formEditSelector+' input[name=\'account_firstname\']',validate:function validate(cb,val){var result=val.length;cb(result)},errorMessage:this.context.firstName},{selector:formEditSelector+' input[name=\'account_lastname\']',validate:function validate(cb,val){var result=val.length;cb(result)},errorMessage:this.context.lastName},{selector:formEditSelector+' input[name=\'account_phone\']',validate:function validate(cb,val){var result=val.length;cb(result)},errorMessage:this.context.phoneNumber}]);$editAccountForm.submit(function(event){editValidator.performCheck();if(editValidator.areAll('valid')){return}event.preventDefault()})};Account.prototype.registerInboxValidation=function registerInboxValidation($inboxForm){var inboxValidator=Object(__WEBPACK_IMPORTED_MODULE_2__common_nod__["a" /* default */])({submit:'form[data-inbox-form] input[type="submit"]'});inboxValidator.add([{selector:'form[data-inbox-form] select[name="message_order_id"]',validate:function validate(cb,val){var result=Number(val)!==0;cb(result)},errorMessage:this.context.enterOrderNum},{selector:'form[data-inbox-form] input[name="message_subject"]',validate:function validate(cb,val){var result=val.length;cb(result)},errorMessage:this.context.enterSubject},{selector:'form[data-inbox-form] textarea[name="message_content"]',validate:function validate(cb,val){var result=val.length;cb(result)},errorMessage:this.context.enterMessage}]);$inboxForm.submit(function(event){inboxValidator.performCheck();if(inboxValidator.areAll('valid')){return}event.preventDefault()})};return Account}(__WEBPACK_IMPORTED_MODULE_0__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.16.js.map