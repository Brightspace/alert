import '../d2l-localize-behavior/d2l-localize-behavior.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Alert = window.D2L.PolymerBehaviors.Alert || {};

/** @polymerBehavior D2L.PolymerBehaviors.Alert.LocalizeBehavior */
D2L.PolymerBehaviors.Alert.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources.
		 */
		resources: {
			value: function() {
				return {
					'en': {
						'close': 'Close Alert'
					},
					'ar': {
						'close': 'إغلاق التنبيه'
					},
					'de': {
						'close': 'Benachrichtigung schließen'
					},
					'es': {
						'close': 'Alerta de cierre'
					},
					'fr': {
						'close': 'Fermer l\'alerte'
					},
					'ja': {
						'close': 'アラートを閉じる'
					},
					'ko': {
						'close': '경보 닫기'
					},
					'nl': {
						'close': 'Waarschuwing sluiten'
					},
					'pt': {
						'close': 'Fechar Alerta'
					},
					'sv': {
						'close': 'Stängningsvarning'
					},
					'tr': {
						'close': 'Kapatma Uyarısı'
					},
					'zh': {
						'close': '关闭警报'
					},
					'zh-tw': {
						'close': '關閉警示'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.Alert.LocalizeBehavior */
D2L.PolymerBehaviors.Alert.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.Alert.LocalizeBehaviorImpl
];
