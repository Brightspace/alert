/**
`d2l-alert`
Polymer-based web component for a D2L alert

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-button/d2l-button-icon.js';
import '../d2l-button/d2l-button-subtle.js';
import '../d2l-colors/d2l-colors.js';
import '../d2l-typography/d2l-typography-shared-styles.js';
import './localize-behavior.js';
import './d2l-alert-shared-styles.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-alert">
	<template strip-whitespace="">
		<style>
			:host {
				animation: 600ms ease drop-in;
				background: white;
				border: 1px solid var(--d2l-color-mica);
				border-radius: 0.3rem;
				display: flex;
				flex-direction: row;
				max-width: 710px;
				width:100%;
			}

			:host(.toast) {
				animation: none;
			}

			:host([hidden]) {
				display: none;
			}
			.alert-wrapper {
				display: flex;
				flex: 1;
			}
			.message-wrapper {
				flex: 1;
				padding: 1rem 1.2rem 1rem 1.5rem;
				position: relative;
			}
			:host-context([dir='rtl']) .message-wrapper {
				padding: 1rem 1.5rem 1rem 1.2rem;
			}
			:host(:dir(rtl)) .message-wrapper {
				padding: 1rem 1.5rem 1rem 1.2rem;
			}
			.message-highlight {
				border-radius: 0.3rem 0 0 0.3rem;
				bottom: 0;
				left: 0;
				margin: -1px;
				top: 0;
				width: 0.3rem;
			}
			:host-context([dir='rtl']) .message-highlight {
				border-radius: 0 0.3rem 0.3rem 0;
				left: auto;
				right: 0;
			}
			:host(:dir(rtl)) .message-highlight {
				border-radius: 0 0.3rem 0.3rem 0;
				left: auto;
				right: 0;
			}

			:host([type="critical"]) .message-highlight,
			:host([type="error"]) .message-highlight {
				background-color: var(--d2l-alert-critical-color);
			}
			:host([type="warning"]) .message-highlight {
				background-color: var(--d2l-alert-warning-color);
			}
			:host([type="default"]) .message-highlight,
			:host([type="call-to-action"]) .message-highlight {
				background-color: var(--d2l-alert-default-color);
			}
			:host([type="success"]) .message-highlight {
				background-color: var(--d2l-alert-success-color);
			}

			@keyframes drop-in {
				from {
					opacity: 0.0;
					transform: translate(0,-10px);
				}
				to {
					opacity: 1;
					transform: translate(0,0);
				}
			}

			[hidden] {
				display: none;
			}

			d2l-button-icon,
			d2l-button-subtle {
				margin: 0.3rem;
			}

			#subtext {
				@apply --d2l-body-compact-text;
				margin: 0.5rem 0 0;
			}

		</style>

		<div class="alert-wrapper">
			<div class="message-highlight"></div>
			<div class="message-wrapper">
				<slot></slot>
				<p id="subtext" hidden$="[[!subtext]]">[[subtext]]</p>
			</div>
			<d2l-button-subtle text="[[buttonText]]" on-tap="_dispatchButtonPressedEvent" hidden$="[[!_hasButton]]"></d2l-button-subtle>
			<d2l-button-icon icon="d2l-tier1:close-default" text="[[localize('close')]]" on-tap="close" hidden$="[[!hasCloseButton]]"></d2l-button-icon>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-alert',

	behaviors: [
		D2L.PolymerBehaviors.Alert.LocalizeBehavior
	],

	/**
	 * Fired when the custom action button is pressed.
	 *
	 * @event d2l-alert-button-pressed
	*/

	/**
	 * Fired when the alert is closed/hidden.
	 *
	 * @event d2l-alert-closed
	*/

	properties: {

		/**
		 * Type of alert to display. Valid values are 'default', 'success', 'critical', and 'warning'.
		 * Values "call-to-action" and "error" have been deprecated.
		 */
		type: {
			type: String,
			value: 'default',
			reflectToAttribute: true
		},
		_hasButton: {
			type: Boolean,
			computed: '_computeHasButton(buttonText)'
		},
		/**
		 * Text for a custom action button. If provided, a button will be rendered with the specified text.
		 */
		buttonText: {
			type: String,
			value: null
		},
		/**
		 * Whether to render a close button, allowing the user to hide the alert.
		 */
		hasCloseButton: {
			type: Boolean,
			value: false
		},
		/**
		 * Additional text that will go underneath the heading
		 */
		subtext: {
			type: String,
			value: null
		}
	},

	/**
	 * Closes/hides the alert.
	 */
	close: function() {
		this.setAttribute('hidden', 'hidden');
		this._dispatchClosedEvent();
	},

	_computeHasButton: function(buttonText) {
		return (buttonText && buttonText.length > 0);
	},

	_dispatchButtonPressedEvent: function() {
		this.fire('d2l-alert-button-pressed');
	},

	_dispatchClosedEvent: function() {
		this.fire('d2l-alert-closed');
	}

});
