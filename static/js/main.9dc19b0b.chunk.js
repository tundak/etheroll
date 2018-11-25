(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(290)},126:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){},202:function(e,t){},204:function(e,t){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(52),o=a.n(i);a(126),a(128),a(130),a(133),a(135);var r=function(){return s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},s.a.createElement("a",{className:"navbar-brand",href:"/"},s.a.createElement("i",{className:"fas fa-dice-d20"}),"\xa0Etheroll"),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",href:"/"},s.a.createElement("i",{className:"fas fa-home"}),"\xa0Home",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"https://github.com/AndreMiras/etheroll"},s.a.createElement("i",{className:"fab fa-github-alt"}),"\xa0About"))))))};a(137);var l=function(){return s.a.createElement("footer",{className:"Footers d-none d-md-block"},s.a.createElement("div",{className:"container"},s.a.createElement("span",{className:"text-muted"},"Copyright (c) 2018 Andre Miras")))},c=a(9),u=a(53),p=a(54),m=a(119),y=a(115),d=a(120),b=(a(139),a(116)),f=a.n(b),v=new Promise(function(e,t){window.addEventListener("load",function(){var a;"undefined"!==typeof window&&"undefined"!==typeof window.web3?(a=new f.a(window.web3.currentProvider),e({web3:a})):t(new Error("Is MetaMask running?"))})});function w(e){var t=e.classType,a=e.message;return a?s.a.createElement("div",{className:"alert alert-".concat(t),role:"alert"},a):null}w.defaultProps={classType:"primary",message:null};var g,E,h=w,k=a(117),N=[{constant:!1,inputs:[{name:"newCallbackGasPrice",type:"uint256"}],name:"ownerSetCallbackGasPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalWeiWon",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxProfitAsPercentOfHouse",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newHouseEdge",type:"uint256"}],name:"ownerSetHouseEdge",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"payoutsPaused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newTreasury",type:"address"}],name:"ownerSetTreasury",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"myid",type:"bytes32"},{name:"result",type:"string"},{name:"proof",type:"bytes"}],name:"__callback",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addressToCheck",type:"address"}],name:"playerGetPendingTxByAddress",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newContractBalanceInWei",type:"uint256"}],name:"ownerUpdateContractBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxProfitDivisor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newPayoutStatus",type:"bool"}],name:"ownerPausePayouts",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"ownerChangeOwner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"minNumber",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newMaxProfitAsPercent",type:"uint256"}],name:"ownerSetMaxProfitAsPercentOfHouse",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"treasury",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalWeiWagered",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newMinimumBet",type:"uint256"}],name:"ownerSetMinBet",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newStatus",type:"bool"}],name:"ownerPauseGame",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"gasForOraclize",outputs:[{name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"sendTo",type:"address"},{name:"amount",type:"uint256"}],name:"ownerTransferEther",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"contractBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"minBet",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"playerWithdrawPendingTransactions",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"maxProfit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalBets",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"randomQueryID",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"gamePaused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"originalPlayerBetId",type:"bytes32"},{name:"sendTo",type:"address"},{name:"originalPlayerProfit",type:"uint256"},{name:"originalPlayerBetValue",type:"uint256"}],name:"ownerRefundPlayer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newSafeGasToOraclize",type:"uint32"}],name:"ownerSetOraclizeSafeGas",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"ownerkill",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"houseEdge",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"rollUnder",type:"uint256"}],name:"playerRollDice",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"houseEdgeDivisor",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maxPendingPayouts",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"BetID",type:"bytes32"},{indexed:!0,name:"PlayerAddress",type:"address"},{indexed:!0,name:"RewardValue",type:"uint256"},{indexed:!1,name:"ProfitValue",type:"uint256"},{indexed:!1,name:"BetValue",type:"uint256"},{indexed:!1,name:"PlayerNumber",type:"uint256"},{indexed:!1,name:"RandomQueryID",type:"uint256"}],name:"LogBet",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"ResultSerialNumber",type:"uint256"},{indexed:!0,name:"BetID",type:"bytes32"},{indexed:!0,name:"PlayerAddress",type:"address"},{indexed:!1,name:"PlayerNumber",type:"uint256"},{indexed:!1,name:"DiceResult",type:"uint256"},{indexed:!1,name:"Value",type:"uint256"},{indexed:!1,name:"Status",type:"int256"},{indexed:!1,name:"Proof",type:"bytes"}],name:"LogResult",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"BetID",type:"bytes32"},{indexed:!0,name:"PlayerAddress",type:"address"},{indexed:!0,name:"RefundValue",type:"uint256"}],name:"LogRefund",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"SentToAddress",type:"address"},{indexed:!0,name:"AmountTransferred",type:"uint256"}],name:"LogOwnerTransfer",type:"event"}],M=a(59),x=Object.freeze({mainnet:1,morden:2,ropsten:3}),P=(g={},Object(c.a)(g,x.mainnet,"0xA52e014B3f5Cc48287c2D483A3E026C32cc76E6d"),Object(c.a)(g,x.ropsten,"0xe12c6dEb59f37011d2D9FdeC77A6f1A8f3B8B1e8"),g),S=(E={},Object(c.a)(E,x.mainnet,"https://etherscan.io"),Object(c.a)(E,x.ropsten,"https://ropsten.etherscan.io"),E),B=function(){function e(t,a){Object(u.a)(this,e),this.web3=t,this.address=a,"undefined"===typeof a&&(this.address=P[t.version.network]),this.abi=N,this.web3Contract=t.eth.contract(N).at(this.address)}return Object(p.a)(e,[{key:"getSolidityEvents",value:function(){var e=this,t={};return this.abi.forEach(function(a){"event"===a.type&&(t[a.name]=new M(e.web3,a,e.address))}),t}},{key:"getEventSignatures",value:function(){var e={},t=this.getSolidityEvents();return Object.keys(t).forEach(function(a){e[a]=t[a].signature()}),e}},{key:"getSolidityEvent",value:function(e){var t=this.getSolidityEvents(),a=Object.keys(t).filter(function(a){return t[a].signature()===e.replace("0x","")});return t[a]}},{key:"decodeEvent",value:function(e){var t=Object(k.a)({},e);return this.getSolidityEvent(t.topics[0]).decode(t)}},{key:"getTransactionLogs",value:function(e){var t=this;this.web3.eth.getBlockNumber(function(a,n){if(a)console.log(a);else{var s={address:t.address,fromBlock:n-100,toBlock:n};t.web3.eth.filter(s).get(e)}})}},{key:"watchTransactionLogs",value:function(e){var t=this;this.web3.eth.getBlockNumber(function(a,n){if(a)console.log(a);else{var s={address:t.address,fromBlock:n-100,toBlock:n};t.web3.eth.filter(s).watch(e)}})}},{key:"getMergedTransactionLogs",value:function(t){var a=this;this.getTransactionLogs(function(n,s){if(n)console.log(n);else{var i=s.map(function(e){return a.decodeEvent(e)}),o=i.filter(function(e){return"LogBet"===e.event}),r=i.filter(function(e){return"LogResult"===e.event}),l=e.mergeLogs(o,r);t(n,l)}})}}],[{key:"mergeLogs",value:function(e,t){var a,n,s,i=[],o={};return t.forEach(function(e){a=e.args.BetID,o[a]=e}),e.forEach(function(e){a=e.args.BetID,n=o[a],s={logBetEvent:e,logResultEvent:n},i.push(s)}),i}}]),e}();var T=function(e){var t=e.address,a=e.network,n="".concat(S[a],"/address/").concat(t);return s.a.createElement("a",{href:n},t)};function C(e){var t=e.account,a=e.contractAddress,n=e.network;return null===t?null:s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Contract \xa0",s.a.createElement(T,{network:n,address:a})),s.a.createElement("div",{className:"col"},"Wallet: \xa0",s.a.createElement(T,{network:n,address:t})))}C.defaultProps={account:null};var D=C,O=a(118),A=a.n(O);a(288);function R(e){var t=e.value,a=e.updateValue,n=e.step,i=e.max;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-3 col-lg-2"},s.a.createElement("input",{type:"number",className:"form-control",onChange:function(e){return a(Number(e.target.value))},value:t})),s.a.createElement("div",{className:"col"},s.a.createElement(A.a,{onChange:a,value:t,step:n,max:i})))}R.defaultProps={step:1,max:100};var j=R;var L=function(e){var t=e.betSize,a=e.updateBetSize;return s.a.createElement("div",{className:"form-group"},s.a.createElement("b",null,"Bet size"),s.a.createElement(j,{value:t,updateValue:a,step:.1,max:10}))};var W=function(e){var t=e.chances,a=e.updateChances;return s.a.createElement("div",{className:"form-group"},s.a.createElement("b",null,"Chance of winning"),s.a.createElement(j,{value:t,updateValue:a}))};var z=function(e){var t=e.value;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("h3",null,"Roll under")),s.a.createElement("div",{className:"col"},s.a.createElement("h3",{className:"roll-under-value"},t)))};function I(e){var t=e.isDisabled,a=e.onClick,n=e.text;return s.a.createElement("button",{type:"button",className:"btn btn-primary btn-lg col-md-3",disabled:t,onClick:a},n)}function V(e){var t=e.isDisabled,a=e.onClick;return s.a.createElement(I,{text:"Roll",isDisabled:t,onClick:a})}I.defaultProps={isDisabled:!1},V.defaultProps={isDisabled:!1};var H=V;function G(e){var t=e.hash,a=e.network,n="".concat(S[a],"/tx/").concat(t);return s.a.createElement("a",{href:n},t)}function _(e){var t=e.network,a=e.mergedLog,n=a.logBetEvent,i=a.logResultEvent,o="?",r="?",l="?",c="secondary";if("undefined"!==typeof i){var u=i.args.DiceResult<n.args.PlayerNumber;o=i.args.Value*Math.pow(10,-18),r=i.args.DiceResult.toString(),l=u?"<":">",c=u?"success":"danger"}return s.a.createElement("div",{className:"row d-inline-flex list-group-item list-group-item-".concat(c)},s.a.createElement("div",{className:"col-sm-2 d-block"},s.a.createElement("h3",null,r)),s.a.createElement("div",{className:"col-10"},s.a.createElement("div",{className:"w-100"},o,"\xa0 ETH"),s.a.createElement("div",{className:"w-100"},r,"\xa0",l,"\xa0",n.args.PlayerNumber.toString()),s.a.createElement("div",{className:"w-100"},"Wallet: \xa0",s.a.createElement(T,{address:n.args.PlayerAddress.toString(),network:t})),s.a.createElement("div",{className:"w-100"},"Transaction: \xa0",s.a.createElement(G,{hash:n.transactionHash,network:t}))))}var F=function(e){var t=e.network,a=e.transactions;if(0===a.length)return s.a.createElement("span",null);var n=a.slice().reverse().map(function(e){return s.a.createElement(_,{key:e.logBetEvent.transactionHash,network:t,mergedLog:e})});return s.a.createElement("div",{className:"card transactions"},s.a.createElement("div",{className:"card-header"},"Transactions (all)"),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"list-group"},n)))},J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(y.a)(t).call(this,e))).state={betSize:.1,chances:50,account:null,web3:null,network:x.mainnet,contract:null,contractAddress:P[x.mainnet],contractTransactions:[],alertDict:{}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getWeb3()}},{key:"onRollClick",value:function(){var e=this.state,t=e.account,a=e.chances,n=e.contract,s=e.betSize,i=a+1,o=e.web3.toWei(s.toString(),"ether");n.web3Contract.playerRollDice(i,{from:t,value:o},function(e,t){e?console.error(e):console.log(JSON.stringify(t))})}},{key:"getTransactions",value:function(e){var t=this;e.getMergedTransactionLogs(function(e,a){e?console.log(e):t.setState(function(e){return{contractTransactions:e.contractTransactions.concat(a)}})})}},{key:"getWeb3",value:function(){var e=this;v.then(function(t){var a=t.web3,n=new B(a),s=n.address;e.getTransactions(n),e.setState({web3:a,network:Number(a.version.network),contract:n,contractAddress:s}),a.eth.getAccounts(function(t,a){t&&console.log(t),e.setState({account:a[0]})})},function(){var t={classType:"danger",message:"No account connected, connect with a Web3-compatible wallet like MetaMask"};e.setState({alertDict:t})})}},{key:"updateState",value:function(e){var t=this;return function(a){t.setState(Object(c.a)({},e,a))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.account,n=t.alertDict,i=t.betSize,o=t.chances,r=t.contract,l=t.contractAddress,c=t.contractTransactions,u=t.network,p=o+1,m=null===t.web3;return s.a.createElement("div",null,s.a.createElement(h,{classType:n.classType,message:n.message}),s.a.createElement(D,{account:a,contractAddress:l,network:u}),s.a.createElement("form",{className:"PlaceBet"},s.a.createElement("h2",null,"Place your bet"),s.a.createElement(L,{betSize:i,updateBetSize:this.updateState("betSize")}),s.a.createElement(W,{chances:o,updateChances:this.updateState("chances")}),s.a.createElement(z,{value:p}),s.a.createElement(H,{isDisabled:m,onClick:function(){return e.onRollClick()}})),s.a.createElement(F,{contract:r,network:u,transactions:c}))}}]),t}(s.a.Component);var Q=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(r,null),s.a.createElement("div",{className:"container"},s.a.createElement(J,null)),s.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.9dc19b0b.chunk.js.map