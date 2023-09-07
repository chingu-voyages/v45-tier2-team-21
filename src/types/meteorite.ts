type Meteorite = {
  id?: string;
  name?: string;
  nametype?: string;
  recclass?: string;
  mass?: string;  // FIXME: just for mock data | should be `number`
  fall?: string;
  year?: string;  // FIXME: just for mock data | should be `Date`
  reclat?: string;  // FIXME: just for mock data | should be `number`
  reclong?: string;  // FIXME: just for mock data | should be `number`
  geolocation?: {
    latitude?: string;  // FIXME: just for mock data | should be `number`
    longitude?: string;  // FIXME: just for mock data | should be `number`
  };
  ":@computed_region_cbhk_fwbd"?: string;  // FIXME: just for mock data | should be `number`
  ":@computed_region_nnqa_25f4"?: string;  // FIXME: just for mock data | should be `number`
};

export default Meteorite;
