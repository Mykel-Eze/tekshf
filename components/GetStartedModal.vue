<template>
  <div id="get-started-modal" class="modal">
    <div class="modal-content relative z-10 full-height">
      <!-- Left side description section -->
      <div class="modal-content-wrapper full-height">
        <div class="modal-desc-text full-height hidden-xs" >
            <span>
              Tekshf is an AI powered item discovery application that helps users find and buy items of best fit
            </span>
        </div>

        <div class="modal-form-wrapper-wrappr full-height">
          <div class="modal-form-wrapper">
            <div class="go-back flex-div visible-xs-sm gap-2 mb-4 modal-close">
              <img src="~/assets/images/back-arr.svg" alt="arrow-left" class="go-back-icon" />
              <span class="go-back-text">Go Back</span>
            </div>
            <div class="modal-form-header mb-6">
              <h2>Start Your Journey Now!</h2>
              <p>Our team will guide you through visas, flights, and travel planning!</p>
            </div>
            <form id="get-started-form" @submit.prevent="submitForm" class="pt-[1px]">
              <!-- Full Name -->
              <div class="input-field">
                <label class="active" for="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  v-model="formData.fullName" 
                  class="inp-field"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <!-- Email Address -->
              <div class="input-field">
                <label for="email" class="active">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="inp-field"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <!-- Phone Number -->
              <div class="input-field">
                <label for="phone" class="active">Phone Number</label>
                <div class="flex-input-field">
                  <div class="w-1/4 mr-2 relative">
                    <select 
                      v-model="selectedCountryCode" 
                      @change="updatePhoneFormat"
                      class="select-field"
                    >
                      <option 
                        v-for="item in countryCodes" 
                        :key="item.shortName" 
                        :value="item"
                      >
                        {{ item.shortName }} ({{ item.code }})
                      </option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <img src="~/assets/images/caret.svg" alt="caret" class="dropdown-icon w-[14px]" />
                    </div>
                  </div>
                  <div class="w-3/4">
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.phone" 
                      class="phone-field"
                      :placeholder="currentPhoneFormat"
                      required
                    />
                  </div>
                </div>
              </div>

              <!-- Country of Residence -->
              <div class="input-field select-field">
                <label for="country" class="active">Country of Residence</label>
                <div class="relative">
                  <select 
                    id="country" 
                    v-model="formData.country" 
                    class=""
                    required
                  >
                    <option value="" disabled selected>Select country</option>
                    <option v-for="item in countryCodes" :key="item.shortName" :value="item.country">
                      {{ item.country }}
                    </option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none z-[1]">
                    <img src="~/assets/images/caret.svg" alt="caret" class="dropdown-icon w-[14px]" />
                  </div>
                </div>
              </div>

              <!-- Additional Requests -->
              <div class="input-field">
                <label for="additionalRequests" class="active">Additional Requests</label>
                <textarea 
                  id="additionalRequests" 
                  v-model="formData.additionalRequests" 
                  rows="4" 
                  class="inp-field"
                  placeholder="Do you have additional requests or inquiries? Enter them here..."
                ></textarea>
              </div>

              <!-- Commitment Fee -->
              <div class="input-field checbox-field">
                <label class="active">Commitment Fee</label>
                <label class="flex-input-field">
                  <input type="checkbox" v-model="formData.commitmentFee" class="filled-in" checked="checked" />
                  <span class="">Pay a small fee now to fast-track your request</span>
                </label>
              </div>

              <!-- Submit Button -->
              <div class="input-field submit-btn-wrapper">
                <button type="submit" class="submit-btn">
                  Submit & Get Assistance
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Toast container for notifications -->
  <!-- <div ref="toastContainer" class="fixed bottom-4 right-4 z-50"></div> -->
</template>

<script setup>
import countryCodesData from '@/data/countryCodes.json';

// Get country codes from JSON file
const countryCodes = ref(countryCodesData.countryCodes || []);

// Form data reactive state
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  country: '',
  additionalRequests: '',
  commitmentFee: true
});

// Default selected country code (US)
const selectedCountryCode = ref(countryCodes.value.find(c => c.shortName === 'US') || countryCodes.value[0]);

// Toast container ref
// const toastContainer = ref(null);

// Computed property for phone format
const currentPhoneFormat = computed(() => {
  return selectedCountryCode.value ? 
    `${selectedCountryCode.value.code} ${selectedCountryCode.value.numberFormat}` : 
    '';
});

// Update phone format when country code changes
const updatePhoneFormat = () => {
  // If the selected country has a matching residence country, update that too
  const matchingCountry = countryCodes.value.find(c => c.shortName === selectedCountryCode.value.shortName);
  if (matchingCountry && !formData.value.country) {
    formData.value.country = matchingCountry.country;
  }
};

// Toast notification function using MaterializeCSS
const showToast = (message, classes = 'green') => {
  if (typeof M !== 'undefined') {
    M.toast({
      html: message,
      classes: classes,
      displayLength: 3000
    });
  } else {
    console.warn('Materialize is not loaded');
    alert(message); // Fallback if Materialize is not available
  }
};

// Form submission handler
const submitForm = () => {
  console.log('Form submitted:', {
    ...formData.value,
    countryCode: selectedCountryCode.value.code,
    countryShortName: selectedCountryCode.value.shortName
  });
  
  // Here you would typically send the data to the backend
  // Using useFetch from Nuxt 3 for API calls
  
  // Example:
  // const { data, error } = await useFetch('/api/submit-travel-request', {
  //   method: 'POST',
  //   body: {
  //     ...formData.value,
  //     countryCode: selectedCountryCode.value.code,
  //     countryShortName: selectedCountryCode.value.shortName
  //   }
  // });
  
  // Show success toast notification
  showToast('Your travel request has been submitted successfully!', 'green');
  
  // Reset form after submission
  formData.value = {
    fullName: '',
    email: '',
    phone: '',
    country: '',
    additionalRequests: '',
    commitmentFee: true
  };

  // Close the modal
  const modalInstance = M.Modal.getInstance(document.getElementById('get-started-modal'));
  if (modalInstance) {
    modalInstance.close();
  }
};
// Initialize MaterializeCSS components when mounted
onMounted(() => {
  if (typeof window !== 'undefined' && window.M) {
    const elemsSelect = document.querySelectorAll('select');
    window.M.FormSelect.init(elemsSelect);
  }
});
</script>

<style scoped src="~/assets/css/getstartedmodal.css"></style>

<style>
.modal-form-wrapper .select-wrapper .caret {
  display: none;
}
form#get-started-form .flex-input-field input {
  margin: 0;
  border: none;
  box-shadow: none;
  height: auto;
  line-height: initial;
  font-size: 14px;
  color: #001214;
}
form#get-started-form .dropdown-content {
  border-radius: 8px;
  max-height: 320px;
}
form#get-started-form .dropdown-content::-webkit-scrollbar {
  width: 0;
}
form#get-started-form .dropdown-content li>span {
  font-size: 14px;
  color: var(--pry-color);
}
form#get-started-form .select-field input.select-dropdown {
    background-color: #F5F6F8;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid #E4E7EC;
    padding: 10px 15px;
    box-sizing: border-box;
    outline: none;
    box-shadow: none;
}
form#get-started-form [type="checkbox"].filled-in:not(:checked)+span:not(.lever):after,
form#get-started-form [type="checkbox"].filled-in:checked+span:not(.lever):after {
  width: 16px;
  height: 16px;
  top: 5px;
}
form#get-started-form [type="checkbox"].filled-in:checked+span:not(.lever):after {
  border-color: var(--pry-color);
  background-color: var(--pry-color);
}
form#get-started-form [type="checkbox"].filled-in:checked+span:not(.lever):before {
    top: 4px;
    left: 1.5px;
    width: 6px;
    height: 10px;
}
</style>
