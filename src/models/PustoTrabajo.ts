export interface ResposePuestoTabajo {
    data: PuestoTabajo[]
  }
  
  export interface PuestoTabajo {
    id: string
    type: string
    attributes: Attributes
    links: Links
  }
  
  export interface Attributes {
    title: string
    description_headline: string
    functions_headline: string
    functions: string
    benefits_headline: string
    benefits: string
    desirable_headline: string
    desirable: string
    remote: boolean
    remote_modality: string
    remote_zone: any
    country: string
    category_name: string
    perks: string[]
    min_salary: any
    max_salary: any
    modality: string
    seniority: string
    published_at: number
    company: Company
  }
  
  export interface Company {
    data: Data
  }
  
  export interface Data {
    id: string
    type: string
    attributes: Attributes2
    relationships: Relationships
  }
  
  export interface Attributes2 {
    name: string
    description: string
    long_description: string
    projects: string
    benefits: string
    web: string
    twitter: string
    github: string
    facebook: string
    angellist: string
    logo: Logo
    country: string
  }
  
  export interface Logo {
    url: string
    thumb: Thumb
  }
  
  export interface Thumb {
    url: string
  }
  
  export interface Relationships {}
  
  export interface Links {
    public_url: string
  }
  