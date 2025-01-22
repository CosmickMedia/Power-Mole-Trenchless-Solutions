(()=>{var e,t,r,o={1451:(e,t,r)=>{"use strict";r.r(t);var o=r(1609),i=r(7723);const a=window.wp.blocks;var n=r(7104),s=r(5791);r(1227);const l=window.wp.blockEditor,c=window.wp.components;var m=r(6087);const d=window.wc.wcSettings;var w=r(3588),p=r(851);const u=window.wp.escapeHtml,v=({error:e})=>(0,o.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,o.createElement)("span",null,(0,i.__)("The following error was returned","woocommerce"),(0,o.createElement)("br",null),(0,o.createElement)("code",null,(0,u.escapeHTML)(e))):"api"===t?(0,o.createElement)("span",null,(0,i.__)("The following error was returned from the API","woocommerce"),(0,o.createElement)("br",null),(0,o.createElement)("code",null,(0,u.escapeHTML)(e))):e:(0,i.__)("An error has prevented the block from being updated.","woocommerce"))(e));r(4974);const h=({className:e="",error:t,isLoading:r=!1,onRetry:a})=>(0,o.createElement)(c.Placeholder,{icon:(0,o.createElement)(n.A,{icon:w.A}),label:(0,i.__)("Sorry, an error occurred","woocommerce"),className:(0,p.A)("wc-block-api-error",e)},(0,o.createElement)(v,{error:t}),a&&(0,o.createElement)(o.Fragment,null,r?(0,o.createElement)(c.Spinner,null):(0,o.createElement)(c.Button,{variant:"secondary",onClick:a},(0,i.__)("Retry","woocommerce"))));r(113);const g=({label:e,screenReaderLabel:t,wrapperElement:r,wrapperProps:i={}})=>{let a;const n=null!=e,s=null!=t;return!n&&s?(a=r||"span",i={...i,className:(0,p.A)(i.className,"screen-reader-text")},(0,o.createElement)(a,{...i},t)):(a=r||m.Fragment,n&&s&&e!==t?(0,o.createElement)(a,{...i},(0,o.createElement)("span",{"aria-hidden":"true"},e),(0,o.createElement)("span",{className:"screen-reader-text"},t)):(0,o.createElement)(a,{...i},e))},_=({onClick:e,label:t=(0,i.__)("Load more","woocommerce"),screenReaderLabel:r=(0,i.__)("Load more","woocommerce")})=>(0,o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},(0,o.createElement)("button",{className:"wp-block-button__link",onClick:e},(0,o.createElement)(g,{label:t,screenReaderLabel:r}))),b=window.wc.blocksComponents;r(9836);const y=({onChange:e,readOnly:t,value:r})=>(0,o.createElement)(b.SortSelect,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:(0,i.__)("Order by","woocommerce"),onChange:e,options:[{key:"most-recent",label:(0,i.__)("Most recent","woocommerce")},{key:"highest-rating",label:(0,i.__)("Highest rating","woocommerce")},{key:"lowest-rating",label:(0,i.__)("Lowest rating","woocommerce")}],readOnly:t,screenReaderLabel:(0,i.__)("Order reviews by","woocommerce"),value:r});var f=r(2294);function R(e){let t,r,o,i=[];for(let a=0;a<e.length;a++)t=e.substring(a),r=t.match(/^&[a-z0-9#]+;/),r?(o=r[0],i.push(o),a+=o.length-1):i.push(e[a]);return i}const E=(e,t,r="...")=>{const o=function(e,t){const r=(t=t||{}).limit||100,o=void 0===t.preserveTags||t.preserveTags,i=void 0!==t.wordBreak&&t.wordBreak,a=t.suffix||"...",n=t.moreLink||"",s=t.moreText||"»",l=t.preserveWhiteSpace||!1,c=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n");let m,d,w,p,u,v,h=0,g=[],_=!1;for(let e=0;e<c.length;e++){if(m=c[e],p=l?m:m.replace(/[ ]+/g," "),!m.length)continue;const t=R(p);if("<"!==m[0])if(h>=r)m="";else if(h+t.length>=r){if(d=r-h," "===t[d-1])for(;d&&(d-=1," "===t[d-1]););else w=t.slice(d).indexOf(" "),i||(-1!==w?d+=w:d=m.length);m=t.slice(0,d).join("")+a,n&&(m+='<a href="'+n+'" style="display:inline">'+s+"</a>"),h=r,_=!0}else h+=t.length;else if(o){if(h>=r)if(u=m.match(/[a-zA-Z]+/),v=u?u[0]:"",v)if("</"!==m.substring(0,2))g.push(v),m="";else{for(;g[g.length-1]!==v&&g.length;)g.pop();g.length&&(m=""),g.pop()}else m=""}else m="";c[e]=m}return{html:c.join("\n").replace(/\n/g,""),more:_}}(e,{suffix:r,limit:t});return o.html},k=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),O=(e,t,r,o)=>{const i=((e,t,r)=>{let o={start:0,middle:0,end:e.length};for(;o.start<=o.end;)o.middle=Math.floor((o.start+o.end)/2),t.innerHTML=E(e,o.middle),o=k(o,t.clientHeight,r);return o.middle})(e,t,r);return E(e,i-o.length,o)},S={className:"read-more-content",ellipsis:"&hellip;",lessText:(0,i.__)("Read less","woocommerce"),maxLines:3,moreText:(0,i.__)("Read more","woocommerce")};class T extends m.Component{constructor(e){super(e),(0,f.A)(this,"reviewSummary",void 0),(0,f.A)(this,"reviewContent",void 0),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=(0,m.createRef)(),this.reviewSummary=(0,m.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){this.setSummary()}componentDidUpdate(e){e.maxLines===this.props.maxLines&&e.children===this.props.children||this.setState({clampEnabled:null,summary:"."},this.setSummary)}setSummary(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,o=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:o}),o&&this.setState({summary:O(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:i}=this.props,a=e?r:i;if(a)return(0,o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},a)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:i,isExpanded:a}=this.state;return t?!1===i?(0,o.createElement)("div",{className:e},(0,o.createElement)("div",{ref:this.reviewContent},t)):(0,o.createElement)("div",{className:e},(!a||null===i)&&(0,o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":a,dangerouslySetInnerHTML:{__html:r}}),(a||null===i)&&(0,o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!a},t),this.getButton()):null}}(0,f.A)(T,"defaultProps",S);const C=T;r(7935);const A=({attributes:e,review:t={}})=>{const{imageType:r,showReviewDate:a,showReviewerName:n,showReviewImage:s,showReviewRating:l,showReviewContent:c,showProductName:m}=e,{rating:d}=t,w=!(Object.keys(t).length>0),u=Number.isFinite(d)&&l;return(0,o.createElement)("li",{className:(0,p.A)("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":w,"wc-block-components-review-list-item__item--has-image":s}),"aria-hidden":w},(m||a||n||s||u)&&(0,o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},s&&function(e,t,r){var a,n;return r||!e?(0,o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):(0,o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?(0,o.createElement)("img",{"aria-hidden":"true",alt:(null===(a=e.product_image)||void 0===a?void 0:a.alt)||"",src:(null===(n=e.product_image)||void 0===n?void 0:n.thumbnail)||""}):(0,o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&(0,o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:(0,i.__)("Verified buyer","woocommerce")},(0,i.__)("Verified buyer","woocommerce")))}(t,r,w),(m||n||u||a)&&(0,o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},u&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},a=(0,i.sprintf)(/* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
(0,i.__)("Rated %f out of 5","woocommerce"),t),n={__html:(0,i.sprintf)(/* translators: %s is referring to the average rating value */ /* translators: %s is referring to the average rating value */
(0,i.__)("Rated %s out of 5","woocommerce"),(0,i.sprintf)('<strong class="rating">%f</strong>',t))};return(0,o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},(0,o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":a},(0,o.createElement)("span",{style:r,dangerouslySetInnerHTML:n})))}(t),m&&function(e){return(0,o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},(0,o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(t),n&&function(e){const{reviewer:t=""}=e;return(0,o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(t),a&&function(e){const{date_created:t,formatted_date_created:r}=e;return(0,o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(t))),c&&function(e){return(0,o.createElement)(C,{maxLines:10,moreText:(0,i.__)("Read full review","woocommerce"),lessText:(0,i.__)("Hide full review","woocommerce"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},(0,o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(t))};r(4105);const P=({attributes:e,reviews:t})=>{const r=(0,d.getSetting)("showAvatars",!0),i=(0,d.getSetting)("reviewRatingsEnabled",!0),a=(r||"product"===e.imageType)&&e.showReviewImage,n=i&&e.showReviewRating,s={...e,showReviewImage:a,showReviewRating:n};return(0,o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===t.length?(0,o.createElement)(A,{attributes:s}):t.map(((e,t)=>(0,o.createElement)(A,{key:e.id||t,attributes:s,review:e}))))};var L=r(923),N=r.n(L);const x=window.wp.apiFetch;var M=r.n(x);const I=e=>{const{className:t,categoryIds:r,productId:o,showReviewDate:i,showReviewerName:a,showReviewContent:n,showProductName:s,showReviewImage:l,showReviewRating:c}=e;let m="wc-block-all-reviews";return o&&(m="wc-block-reviews-by-product"),Array.isArray(r)&&(m="wc-block-reviews-by-category"),(0,p.A)(m,t,{"has-image":l,"has-name":a,"has-date":i,"has-rating":c,"has-content":n,"has-product-name":s})},j=e=>{const{categoryIds:t,imageType:r,orderby:o,productId:i,reviewsOnPageLoad:a,reviewsOnLoadMore:n,showLoadMore:s,showOrderby:l}=e,c={"data-image-type":r,"data-orderby":o,"data-reviews-on-page-load":a,"data-reviews-on-load-more":n,"data-show-load-more":s,"data-show-orderby":l};return i&&(c["data-product-id"]=i),Array.isArray(t)&&(c["data-category-ids"]=t.join(",")),c};class D extends m.Component{render(){const{attributes:e,error:t,isLoading:r,noReviewsPlaceholder:a,reviews:n,totalReviews:s}=this.props;if(t)return(0,o.createElement)(h,{className:"wc-block-featured-product-error",error:t,isLoading:r});if(0===n.length&&!r)return(0,o.createElement)(a,{attributes:e});const l=(0,d.getSetting)("reviewRatingsEnabled",!0);return(0,o.createElement)(c.Disabled,null,e.showOrderby&&l&&(0,o.createElement)(y,{readOnly:!0,value:e.orderby,onChange:()=>null}),(0,o.createElement)(P,{attributes:e,reviews:n}),e.showLoadMore&&s>n.length&&(0,o.createElement)(_,{screenReaderLabel:(0,i.__)("Load more reviews","woocommerce"),onClick:()=>null}))}}const B=(e=>{class t extends m.Component{constructor(...e){var t,r,o;super(...e),(0,f.A)(this,"isPreview",!!this.props.attributes.previewReviews),(0,f.A)(this,"delayedAppendReviews",(null!==(t=this.props.delayFunction)&&void 0!==t?t:e=>e)(this.appendReviews)),(0,f.A)(this,"isMounted",!1),(0,f.A)(this,"state",{error:null,loading:!0,reviews:this.isPreview&&null!==(r=this.props.attributes)&&void 0!==r&&r.previewReviews?this.props.attributes.previewReviews:[],totalReviews:this.isPreview&&null!==(o=this.props.attributes)&&void 0!==o&&o.previewReviews?this.props.attributes.previewReviews.length:0}),(0,f.A)(this,"setError",(async e=>{var t;if(!this.isMounted)return;const r=null!==(t=this.props.onReviewsLoadError)&&void 0!==t?t:()=>{},o=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);this.setState({reviews:[],loading:!1,error:o}),r(o)}))}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!N()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,"cancel"in this.delayedAppendReviews&&"function"==typeof this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:o,productId:i,reviewsToDisplay:a}=this.props,n={order:r,orderby:o,per_page:a-e,offset:e};if(t){const e=Array.isArray(t)?t:JSON.parse(t);n.category_id=Array.isArray(e)?e.join(","):e}return i&&(n.product_id=i),n}replaceReviews(){var e;if(this.isPreview)return;const t=null!==(e=this.props.onReviewsReplaced)&&void 0!==e?e:()=>{};this.updateListOfReviews().then(t)}appendReviews(){var e;if(this.isPreview)return;const t=null!==(e=this.props.onReviewsAppended)&&void 0!==e?e:()=>{},{reviewsToDisplay:r}=this.props,{reviews:o}=this.state;r<=o.length||this.updateListOfReviews(o).then(t)}updateListOfReviews(e=[]){const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,o=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(o).fill({}))}),(i=this.getArgs(e.length),M()({path:"/wc/store/v1/products/reviews?"+Object.entries(i).map((e=>e.join("="))).join("&"),parse:!1}).then((e=>e.json().then((t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)})))))).then((({reviews:t,totalReviews:r})=>(this.isMounted&&this.setState({reviews:e.filter((e=>Object.keys(e).length)).concat(t),totalReviews:r,loading:!1,error:null}),{newReviews:t}))).catch(this.setError);var i}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:i,reviews:a,totalReviews:n}=this.state;return(0,o.createElement)(e,{...this.props,error:r,isLoading:i,reviews:a.slice(0,t),totalReviews:n})}}const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews(${r})`,t})(D),F=({attributes:e,icon:t,name:r,noReviewsPlaceholder:a})=>{const{categoryIds:n,productId:s,reviewsOnPageLoad:m,showProductName:w,showReviewDate:p,showReviewerName:u,showReviewContent:v,showReviewImage:h,showReviewRating:g}=e,{order:_,orderby:b}=(e=>{if((0,d.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}})(e.orderby),y=!(v||g||p||u||h||w),f=(0,l.useBlockProps)({className:I(e)});return y?(0,o.createElement)(c.Placeholder,{icon:t,label:r},(0,i.__)("The content for this block is hidden due to block settings.","woocommerce")):(0,o.createElement)("div",{...f},(0,o.createElement)(B,{attributes:e,categoryIds:n,delayFunction:e=>((e,t,r)=>{let o,i=null;const a=(...t)=>{i=t,o&&clearTimeout(o),o=setTimeout((()=>{o=null,i&&e(...i)}),400)};return a.flush=()=>{o&&i&&(e(...i),clearTimeout(o),o=null)},a})(e),noReviewsPlaceholder:a,orderby:b,order:_,productId:s,reviewsToDisplay:m}))},H=()=>(0,o.createElement)(c.Placeholder,{className:"wc-block-all-reviews",icon:(0,o.createElement)(n.A,{icon:s.A,className:"block-editor-block-icon"}),label:(0,i.__)("All Reviews","woocommerce")},(0,i.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.","woocommerce")),G=({attributes:e,setAttributes:t})=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,{key:"inspector"},(0,o.createElement)(c.PanelBody,{title:(0,i.__)("Content","woocommerce")},(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Product name","woocommerce"),checked:e.showProductName,onChange:()=>t({showProductName:!e.showProductName})}),((e,t)=>{const r=(0,d.getSetting)("showAvatars",!0),a=(0,d.getSetting)("reviewRatingsEnabled",!0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Product rating","woocommerce"),checked:e.showReviewRating,onChange:()=>t({showReviewRating:!e.showReviewRating})}),e.showReviewRating&&!a&&(0,o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},(0,m.createInterpolateElement)((0,i.__)("Product rating is disabled in your <a>store settings</a>.","woocommerce"),{a:(0,o.createElement)("a",{href:(0,d.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Reviewer name","woocommerce"),checked:e.showReviewerName,onChange:()=>t({showReviewerName:!e.showReviewerName})}),(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Image","woocommerce"),checked:e.showReviewImage,onChange:()=>t({showReviewImage:!e.showReviewImage})}),(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Review date","woocommerce"),checked:e.showReviewDate,onChange:()=>t({showReviewDate:!e.showReviewDate})}),(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Review content","woocommerce"),checked:e.showReviewContent,onChange:()=>t({showReviewContent:!e.showReviewContent})}),e.showReviewImage&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.__experimentalToggleGroupControl,{label:(0,i.__)("Review image","woocommerce"),isBlock:!0,value:e.imageType,onChange:e=>t({imageType:e})},(0,o.createElement)(c.__experimentalToggleGroupControlOption,{value:"reviewer",label:(0,i.__)("Reviewer photo","woocommerce")}),(0,o.createElement)(c.__experimentalToggleGroupControlOption,{value:"product",label:(0,i.__)("Product","woocommerce")})),"reviewer"===e.imageType&&!r&&(0,o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},(0,m.createInterpolateElement)((0,i.__)("Reviewer photo is disabled in your <a>site settings</a>.","woocommerce"),{a:(0,o.createElement)("a",{href:(0,d.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))})(e,t)),(0,o.createElement)(c.PanelBody,{title:(0,i.__)("List Settings","woocommerce")},((e,t)=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Order by","woocommerce"),checked:e.showOrderby,onChange:()=>t({showOrderby:!e.showOrderby})}),(0,o.createElement)(c.SelectControl,{label:(0,i.__)("Order Product Reviews by","woocommerce"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:e=>t({orderby:e})}),(0,o.createElement)(c.RangeControl,{label:(0,i.__)("Starting Number of Reviews","woocommerce"),value:e.reviewsOnPageLoad,onChange:e=>t({reviewsOnPageLoad:e}),max:20,min:1}),(0,o.createElement)(c.ToggleControl,{label:(0,i.__)("Load more","woocommerce"),checked:e.showLoadMore,onChange:()=>t({showLoadMore:!e.showLoadMore})}),e.showLoadMore&&(0,o.createElement)(c.RangeControl,{label:(0,i.__)("Load More Reviews","woocommerce"),value:e.reviewsOnLoadMore,onChange:e=>t({reviewsOnLoadMore:e}),max:20,min:1})))(e,t))),(0,o.createElement)(F,{attributes:e,icon:(0,o.createElement)(n.A,{icon:s.A,className:"block-editor-block-icon"}),name:(0,i.__)("All Reviews","woocommerce"),noReviewsPlaceholder:H}));var W,U,J,$,z,V,q,Y,Z,K;const Q=(0,d.getSetting)("wcBlocksConfig",{pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),X=(Q.pluginUrl,Q.pluginUrl,null===(W=d.STORE_PAGES.shop)||void 0===W||W.permalink,null===(U=d.STORE_PAGES.checkout)||void 0===U||U.id,null===(J=d.STORE_PAGES.checkout)||void 0===J||J.permalink,null===($=d.STORE_PAGES.privacy)||void 0===$||$.permalink,null===(z=d.STORE_PAGES.privacy)||void 0===z||z.title,null===(V=d.STORE_PAGES.terms)||void 0===V||V.permalink,null===(q=d.STORE_PAGES.terms)||void 0===q||q.title,null===(Y=d.STORE_PAGES.cart)||void 0===Y||Y.id,null===(Z=d.STORE_PAGES.cart)||void 0===Z||Z.permalink,null!==(K=d.STORE_PAGES.myaccount)&&void 0!==K&&K.permalink?d.STORE_PAGES.myaccount.permalink:(0,d.getSetting)("wpLoginUrl","/wp-login.php"),(0,d.getSetting)("localPickupEnabled",!1),(0,d.getSetting)("countries",{})),ee=(0,d.getSetting)("countryData",{}),te=(Object.fromEntries(Object.keys(ee).filter((e=>!0===ee[e].allowBilling)).map((e=>[e,X[e]||""]))),Object.fromEntries(Object.keys(ee).filter((e=>!0===ee[e].allowBilling)).map((e=>[e,ee[e].states||[]]))),Object.fromEntries(Object.keys(ee).filter((e=>!0===ee[e].allowShipping)).map((e=>[e,X[e]||""]))),Object.fromEntries(Object.keys(ee).filter((e=>!0===ee[e].allowShipping)).map((e=>[e,ee[e].states||[]]))),Object.fromEntries(Object.keys(ee).map((e=>[e,ee[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],order:[]}),re=((0,d.getSetting)("addressFieldsLocations",te).address,(0,d.getSetting)("addressFieldsLocations",te).contact,(0,d.getSetting)("addressFieldsLocations",te).order,(0,d.getSetting)("additionalOrderFields",{}),(0,d.getSetting)("additionalContactFields",{}),(0,d.getSetting)("additionalAddressFields",{}),{attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:(0,i.__)("July 15, 2019","woocommerce"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:(0,i.__)("WordPress Pennant","woocommerce"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:(0,i.__)("Alice","woocommerce"),review:`<p>${(0,i.__)("I bought this product last week and I'm very happy with it.","woocommerce")}</p>\n`,reviewer_avatar_urls:{48:Q.defaultAvatar,96:Q.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:(0,i.__)("July 12, 2019","woocommerce"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:(0,i.__)("WordPress Pennant","woocommerce"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:(0,i.__)("Bob","woocommerce"),review:`<p>${(0,i.__)("This product is awesome, I love it!","woocommerce")}</p>\n`,reviewer_avatar_urls:{48:Q.defaultAvatar,96:Q.defaultAvatar},rating:null,verified:!1}]}});(0,a.registerBlockType)("woocommerce/all-reviews",{apiVersion:3,title:(0,i.__)("All Reviews","woocommerce"),icon:{src:(0,o.createElement)(n.A,{icon:s.A,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[(0,i.__)("WooCommerce","woocommerce")],description:(0,i.__)("Show a list of all product reviews.","woocommerce"),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:{...re,attributes:{...re.attributes,showProductName:!0}},attributes:{editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null},showProductName:{type:"boolean",default:!0}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:({idBase:e,instance:t})=>"woocommerce_recent_reviews"===e&&!(null==t||!t.raw),transform:({instance:e})=>(0,a.createBlock)("woocommerce/all-reviews",{reviewsOnPageLoad:e.raw.number,imageType:"product",showLoadMore:!1,showOrderby:!1,showReviewDate:!1,showReviewContent:!1})}]},edit:e=>{const t=(0,l.useBlockProps)();return(0,o.createElement)("div",{...t},(0,o.createElement)(G,{...e}))},save:({attributes:e})=>(0,o.createElement)("div",{...l.useBlockProps.save({className:I(e)}),...j(e)})})},113:()=>{},7935:()=>{},4105:()=>{},9836:()=>{},1227:()=>{},4974:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},5573:e=>{"use strict";e.exports=window.wp.primitives}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,e=[],a.O=(t,r,o,i)=>{if(!r){var n=1/0;for(m=0;m<e.length;m++){for(var[r,o,i]=e[m],s=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(a.O).every((e=>a.O[e](r[l])))?r.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(m--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[r,o,i]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var i=Object.create(null);a.r(i);var n={};t=t||[null,r({}),r([]),r(r)];for(var s=2&o&&e;"object"==typeof s&&!~t.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,a.d(i,n),i},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=848,(()=>{var e={848:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[n,s,l]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var m=l(a)}for(t&&t(r);c<n.length;c++)i=n[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(m)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[94],(()=>a(1451)));n=a.O(n),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["all-reviews"]=n})();