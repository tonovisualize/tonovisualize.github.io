
window.eczemaContent= {
  atopic: {
    about: ` <p> Atopic dermatitis is a chronic, relapsing inflammatory skin condition characterized by dry skin, intense itching, and recurrent eczematous lesions. It often begins in childhood and may be associated with asthma or allergic rhinitis. 
    <p><strong>Symptoms:</strong></p>
    <ul>
      <li>Dry, scaly skin</li>
      <li>Intense itching</li>
      <li>Redness and inflammation</li>
      <li>Frequent flare-ups</li>
      <li>Association with asthma or allergic rhinitis</li>
    </ul>
    `,
    differential: [
      "Contact dermatitis",
      "Psoriasis",
      "Seborrheic dermatitis",
      "Scabies"
    ]
  },
  contact: {
    about:` <p> Contact dermatitis results from direct skin exposure to irritants or allergens. It may present as well-demarcated erythematous patches, vesicles, or scaling depending on the cause and duration of exposure.
    <p><strong>Symptoms:</strong></p>
    <ul>
    <li>Dry, scaly skin</li>
    <li>Intense itching</li>
    <li>Redness and inflammation</li>
    <li>Frequent flare-ups</li>
    <li>Association with asthma or allergic rhinitis</li>
  </ul>
  `,
    differential: [
      "Atopic dermatitis",
      "Photodermatitis",
      "Urticaria",
      "Tinea corporis"
    ]
  },
  seborrheic: {
    about: ` <p> Seborrheic dermatitis is a common, chronic inflammatory condition affecting areas rich in sebaceous glands such as the scalp, face, and chest. It presents with flaky, greasy scales and erythema.
     <p><strong>Symptoms:</strong></p>
    <ul>
    <li>Dry, scaly skin</li>
    <li>Intense itching</li>
    <li>Redness and inflammation</li>
    <li>Frequent flare-ups</li>
    <li>Association with asthma or allergic rhinitis</li>
  </ul>
  `,
    differential: [
      "Psoriasis",
      "Tinea capitis",
      "Lupus erythematosus",
      "Rosacea"
    ]
  },
  nummular: {
    about: ` <p> Nummular eczema is characterized by coin-shaped lesions that are often itchy and scaly. It can occur after skin injury or in dry skin conditions.
    <p><strong>Symptoms:</strong></p>
    <ul>
    <li>Round or oval-shaped patches of irritated skin</li>
    <li>Itching, which can be severe</li>
    <li>Redness and inflammation</li>
    <li>Dry, scaly, or crusted skin</li>
    <li>Blisters that may ooze or become crusty</li>
  </ul>
  `,
    differential: [
      "Tinea corporis",
      "Psoriasis",
      "Contact dermatitis",
      "Scabies"
    ]
  },
  dyshidrotic: {
    about: ` <p> Dyshidrotic eczema is characterized by small, itchy blisters on the palms and soles. It may be triggered by stress, heat, or moisture.
    <p><strong>Symptoms:</strong></p>
    <ul>
    <li>Small, fluid-filled blisters on the sides of the fingers, palms, and soles.</li>
    <li>Intense itching and burning sensations, often preceding or surrounding the blisters.</li>
    <li>Painful or tender blisters, which may become large in severe cases</li>
    <li>Dry, scaly, or cracked skin as blisters heal or fade</li>
    <li>Excessive sweating or moisture in affected areas, which may worsen symptoms</li>
  </ul>
  `,
    differential: [
      "Pompholyx",
      "Contact dermatitis",
      "Scabies",
      "Tinea pedis"
    ]
  },
  stasis: {
    about: ` <p> Stasis dermatitis occurs due to venous insufficiency and is characterized by erythema, scaling, and sometimes ulceration in the lower extremities.
    <p><strong>Symptoms:</strong></p>
    <ul>
    <li>Itchy, dry, irritated skin (especially over varicose veins)</li>
    <li>Scaling or flaking</li>
    <li>Crusting or cracking skin</li>
    <li>Discoloration or darkening of the skin (often brown)</li>
    <li>Swelling in the lower legs, especially around the ankles</li>
    <li>Swelling that improves overnight but reappears during the day</li>
    <li>Heaviness or aching in one or both legs when standing or walking</li>
    <li>Pain that worsens with prolonged standing or walking</li>
    <li>Skin thickening, hardening, or a bumpy, cobblestone-like texture</li>
    <li>Shiny or thinned appearance of the skin</li>
    <li>Open sores or venous ulcers that may bleed, ooze, or leave scars</li>
  </ul>
  `,
    differential: [
      "Venous ulcers",
      "Contact dermatitis",
      "Cellulitis",
      "Psoriasis"
    ]
  },
  neuro: {
    about: `<p> Neurodermatitis is a localized form of eczema that results from chronic scratching or rubbing. It presents as thickened, leathery patches of skin.
    <p><strong>Symptoms:</strong></p>
    <ul>
    <li>Thickened, leathery skin (lichenification)</li>
    <li>Intense itching, often worse at night</li>
    <li>Well-defined, scaly patches</li>
    <li>Commonly affects the neck, wrists, forearms, or ankles</li>
  </ul>
    `,
    differential: [
      "Psoriasis",
      "Lichen simplex chronicus",
      "Contact dermatitis",
      "Tinea corporis"
    ]
  },

};

// Descriptors shown by condition (edit as you like)
const DESCRIPTORS_BY_TYPE = {
  atopic: [
    "itchiness","lichenification","dry skin",
    "excoriation","hypopigmentation","bumps"
  ],
  contact: ["erythema","vesicles","itchiness","scaling"],
  dyshidrotic: ["vesicles","itchiness","pain","peeling"],
  neurodermatitis: ["lichenification","pruritus","plaques"],
  nummular: ["coin-shaped plaques","crusting","exudate"],
  seborrheic: ["greasy scale","erythema","dandruff"],
  stasis: ["hemosiderin","edema","ulceration"]
};
