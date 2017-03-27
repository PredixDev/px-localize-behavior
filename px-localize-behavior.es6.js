(function() {
  /**
   * PxLocalizeBehavior extends app-localize-behavior and provides localization for all Predix UI components.
   *
   * @polymerBehavior PxLocalizeBehavior
   */
  var PxLocalizeBehaviorImpl = {

    properties: {

      language: {
        type: String,
        value: 'en'
      },

      useKeyIfMissing: {
        type: Boolean,
        value: true
      }

    },
    attached: function() {
      this.loadResources(this.resolveUrl('locales.json'));
    },
  };
   /** @polymerBehavior */
  window.PxLocalizeBehavior = window.PxLocalizeBehavior || [Polymer.AppLocalizeBehavior, PxLocalizeBehaviorImpl];

})();
