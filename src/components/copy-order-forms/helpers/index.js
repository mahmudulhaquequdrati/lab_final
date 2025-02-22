
export const copiedOrderDefaultState = {
  transportationData: {
    type_of_transport: "",
    mode_of_transportation: "",
    transport_with: [],
    oxygen_quantity: null,
  },
  recurringData: {
    recurring_type: "",
    start_date: null,
    return_date: null,
    start_time: "",
    return_time: "",
    multiple_week_days: [],
    ends: "",
    free_dates: [new Date()],
    free_dates_start_time: "",
    free_dates_return_time: "",
  },
  patientData: {
    name: "",
    surname: "",
    date_of_birth: null,
    area_room: "",
    cost_center: "",
    how_much: "",
    which: "",
    isolation: false,
    patient_above_90kg: false,
  },
  destinationDetailsData: {
    pick_up_name: "",
    pick_up_address: "",
    pick_up_postal_code: '',
    pick_up_city: "",
    pick_up_country: "",
    pickup_phone: "",
    pick_up_employee_name: "",
    drop_off_pick_up_date: null,
    drop_off_pick_up_time: "",
    pickup_appointment_time: "",
    drop_off_name: "",
    drop_off_address: "",
    drop_off_postal_code: "",
    drop_off_city: "",
    drop_off_country: "",
    drop_off_phone: "",
    return_date: null,
    return_approx_time: "",
  },
  billingDetailsData: {
    pre_name: "",
    name: "",
    street: "",
    place: "",
    contact: "",
    contact_phone: "",
  },
};
