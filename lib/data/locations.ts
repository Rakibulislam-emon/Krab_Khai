import { Location } from "@/lib/types";

export const locations: Location[] = [
  {
    id: "downtown",
    name: "Crabs Khai Downtown",
    address: "123 Ocean Drive, Marina Bay, City",
    coordinates: {
      lat: 1.2834,
      lng: 103.8607,
    },
    phone: "+880 123 456 789",
    email: "downtown@crabskhai.com",
    hours: {
      weekdays: "11:00 AM - 10:00 PM",
      weekends: "10:00 AM - 11:00 PM",
    },
    image: "/assets/images/locations/downtown.jpg",
  },
];
