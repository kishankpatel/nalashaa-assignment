function rendomId () {
  return Math.random().toString(36).substring(3);
}

const defaultServices = [
  {
    id: rendomId(),
    office_code: '1101',
    description: 'Sample description 1',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1102',
    description: 'Sample description 2',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },
  {
    id: rendomId(),
    office_code: '1103',
    description: 'Sample description 3',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1104',
    description: 'Sample description 4',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1105',
    description: 'Sample description 5',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1106',
    description: 'Sample description 6',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1107',
    description: 'Sample description 7',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1108',
    description: 'Sample description 8',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1109',
    description: 'Sample description 9',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1110',
    description: 'Sample description 10',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1111',
    description: 'Sample description 11',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1112',
    description: 'Sample description 12',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1113',
    description: 'Sample description 13',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1114',
    description: 'Sample description 14',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1115',
    description: 'Sample description 15',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1116',
    description: 'Sample description 16',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1117',
    description: 'Sample description 17',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1118',
    description: 'Sample description 18',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },{
    id: rendomId(),
    office_code: '1119',
    description: 'Sample description 19',
    billing_code: '232',
    base_charge: '56.44',
    uom_type: 'days',
    claim_type: 'profesional',
    service_type: 'group',
    modifiers: [ { "position": "3", "value": "AA - AA" }, { "position": "4", "value": "AC - AC" } ]
  },
  {
    id: rendomId(),
    office_code: '1120',
    description: 'Sample description 20',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },
  {
    id: rendomId(),
    office_code: '1121',
    description: 'Sample description 21',
    billing_code: '243',
    base_charge: '121.10',
    uom_type: 'units',
    claim_type: 'institutional',
    service_type: 'individual',
    modifiers: [ { "position": "1", "value": "AB - AB" }, { "position": "2", "value": "AD - AD" } ]
  },
]

export default defaultServices;
