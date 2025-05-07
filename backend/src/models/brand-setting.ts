export type BrandSettings = {
  brandId: string;
  sellerPaymentOptions: {
    credits: boolean;
    cash: boolean;
  };
  sellerShippingOptions: {
    bluex: boolean;
    homePickup: boolean;
  };
  sellerAdditionalFees: {
    /** Options are: "none", "optional", "requiered" */
    cleaningFee: string;
  };
};
