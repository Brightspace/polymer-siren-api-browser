import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-styles/paper-styles.js';
import '@polymer/paper-styles/color.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = /*html*/`<dom-module id="shared-styles">
	<template strip-whitespace>
		<style is="custom-style" include="paper-material-styles iron-positioning">
		paper-button, paper-checkbox {
			background: var(--default-secondary-color);
			@apply --paper-font-button;
		}
		h2, h3, h4 {
			@apply --paper-font-title;
		}
		.indigo {
			background-color: #f5f5f5;
		}
		.card {
			margin: 24px;
			padding: 16px;
			color: #757575;
			border-radius: 5px;
			background-color: #fff;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
		}

		.circle {
			display: inline-block;
			width: 64px;
			height: 64px;
			text-align: center;
			color: #555;
			border-radius: 50%;
			background: #ddd;
			font-size: 30px;
			line-height: 64px;
		}

		a {
			color: cornflowerblue;
		}
		a:hover {
			text-underline-position: below;
			text-decoration: underline;

			cursor: pointer;
		}

		h1 {
			margin: 16px 0;
			color: #333;
			font-size: 22px;
		}
		pre {
			word-wrap: break-word;
			white-space: pre-wrap;
			margin: 0.25rem 0.25rem;
		}

		ul {
			list-style-type: none;
			padding-left: 0;
		}
		.card-header {
			background:#006FBF;
			color:white;
		}

		.medium-card-size {
			width: 100%;
			max-height: 650px;
			overflow-y: scroll;
		}

		.card-header-text {
			margin:0;
			padding:10px;
			font-weight:normal;
		}
		.pre {
			width: 100%;
			border-radius: 4px;
			border: 1px solid #ccc;
			color: #333;
		}
		.basic-left-padding {
			padding-left: 10px
		}
		.basic-right-padding {
			padding-left: 10px
		}
		.basic-top-bottom-padding {
			padding-top: 10px;
			padding-bottom: 10px;
		}
		.accordian {
			margin-bottom: .2em;
			text-align: left;
		}
		.accordian-header {
			padding: .2em;
			padding-left: 1em;
		}
		.accordian-header:hover {
			user-select: none;
			cursor: pointer;
			background-color: #ccc;
		}
</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
