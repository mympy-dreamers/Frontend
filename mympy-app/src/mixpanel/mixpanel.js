import mixpanel from 'mixpanel-browser';

const productionHost = 'https://mympydreamers.netlify.com'; 
const devToken = process.env.DEV_TOKEN; 
const prodToken = process.env.PROD_TOKEN;

if (window.location.hostname.toLowerCase().search(productionHost) < 0) { mixpanel.init(devToken);
} else { mixpanel.init(prodToken); }

// let env_check = process.env.NODE_ENV === 'production';

let actions = {
  identify: (id) => {
    mixpanel.identify(id);
  },
  alias: (id) => {
    mixpanel.alias(id);
  },
  track: (name, props) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props) => {
      mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;