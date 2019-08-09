import mixpanel from 'mixpanel-browser';

const productionHost = 'https://mympydreamers.netlify.com'; 
const devToken = 'b8fe5e87fd8564fb1a9a6aadd77695b4'; 
const prodToken = '3f03b1c63fad94a710853f44d3e1b5fa';

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