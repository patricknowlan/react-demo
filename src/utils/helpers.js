// Helper Functions (in this case the only one is getData)
import axios from 'axios';
import config from "../config"

const helpers = {
  getGiphs: () => {

    var giphy = axios.create({
      baseURL: 'https://api.giphy.com/v1',
      timeout: 1000
    });

    giphy.get('/gifs/search?q=dogs&api_key='+ config.giphy_api_key)
      .then(function (response) {
        console.log("response", response);
        return response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });


  },
  getData: () => {
    return [
      {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

      }, {
        id: 2,
        name: 'Mercedes-Benz AMG GT Coupe',
        year: '2016',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

      }, {
        id: 3,
        name: 'BMW X6 SUV',
        year: '2016',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
      }, {
        id: 4,
        name: 'Ford Edge SUV',
        year: '2016',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
      }, {
        id: 5,
        name: 'Dodge Viper Coupe',
        year: '2017',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
      }, {
        id: 6,
        name: 'Chevrolet Silverado 3500HD LTZ',
        year: '2017',
        model: 'Silverado',
        make: 'Chevrolet',
        media: 'http://media.ed.edmunds-media.com/chevrolet/silverado-3500hd/2017/oem/2017_chevrolet_silverado-3500hd_crew-cab-pickup_ltz_fq_oem_10_717.jpg',
        price: '$70,640'
      }, {
        id: 7,
        name: 'Jeep Grand Cherokee SRT',
        year: '2017',
        model: 'Grand Cherokee SRT',
        make: 'Jeep',
        media: 'http://media.ed.edmunds-media.com/jeep/grand-cherokee-srt/2017/oem/2017_jeep_grand-cherokee-srt_4dr-suv_base_rq_oem_3_717.jpg',
        price: '$80,260'
      }, {
        id: 8,
        name: 'Jeep Wrangler Unlimited Rubicon',
        year: '2017',
        model: 'Wrangler',
        make: 'Jeep',
        media: 'http://media.ed.edmunds-media.com/jeep/wrangler/2017/oem/2017_jeep_wrangler_convertible-suv_unlimited-rubicon-recon_fq_oem_1_717.jpg',
        price: '$37,435'
      }, {
        id: 9,
        name: 'Audi R8 V10 quattro Coupe',
        year: '2018',
        model: 'R8',
        make: 'Audi',
        media: 'http://media.ed.edmunds-media.com/audi/r8/2018/oem/2018_audi_r8_coupe_v10-quattro_s_oem_1_717.jpg',
        price: '$179,550'
      }, {
        id: 10,
        name: 'Toyota Prius Prime Advanced',
        year: '2017',
        model: 'Prius',
        make: 'Toyota',
        media: 'http://media.ed.edmunds-media.com/toyota/prius-prime/2017/oem/2017_toyota_prius-prime_4dr-hatchback_advanced_fq_oem_4_717.jpg',
        price: '$33,986'
      }

    ];
  }
};

// We export the helpers function (which contains getGithubInfo)
export default helpers;
