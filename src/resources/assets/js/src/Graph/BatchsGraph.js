"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addTag=exports.getBatchs=exports.addBatch=void 0;var _graphQL=require("rufUtils/graphQL"),simpleBatchsCols="id,added_by,taggable_type,slug,name,options{quantity,selections{name,slug}}",simpleBatchsWithTagsCols="id,added_by,taggable_type,slug,name,options{quantity,selections{name,slug}},tags{name,slug}",processBatchs=function(t){window.reduxStore.dispatch({type:"Add_tag_batchs",batchs:t.batchs}),window.reduxStore.dispatch({type:"Add_tag_batch_names",batchNames:t.batchNames})},addBatch=exports.addBatch=function(t){return(0,_graphQL.setGraph)('mutation batchs {\n\t\t\tAddBatch(\n\t\t\t\tname: "'+t.name+'",\n\t\t\t\ttaggable_type: "'+t.taggable_type+'",\n\t\t\t\tmulti: '+t.multi+',\n\t\t\t\tselections: "'+t.selections+'"\n\t\t\t) {'+simpleBatchsCols+"}\n\t\t}\n\t").then(function(t){return processBatchs({batchs:[t.AddBatch]}),t})},getBatchs=exports.getBatchs=function(t,a){var e="",s=simpleBatchsCols;return t&&a&&(e='(type:"'+t+'",id:'+a+")",s=simpleBatchsWithTagsCols),(0,_graphQL.getGraph)("{BatchsQuery"+e+"{"+s+"},BatchNamesQuery{name,slug}}").then(function(t){return processBatchs(t),t})},addTag=exports.addTag=function(t){return(0,_graphQL.setGraph)('mutation tags {\n\t\t\tAddTag(\n\t\t\t\ttag: "'+t.name+'",\n\t\t\t\ttaggable_type: "'+t.taggable_type+'",\n\t\t\t\tmulti: '+t.multi+',\n\t\t\t\tselections: "'+t.selections+'"\n\t\t\t) {'+simpleBatchsCols+"}\n\t\t}\n\t").then(function(t){return processBatchs({batchs:[t.AddBatch]}),t})};