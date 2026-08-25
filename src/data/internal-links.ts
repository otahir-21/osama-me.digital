import { SERVICE_PATHS } from "@/data/services-detail";

export const serviceNames: Record<string, string> = {
  "mobile-app-development-dubai": "Mobile App Development Dubai",
  "app-rescue-maintenance": "App Rescue & Maintenance",
  "custom-software-development-dubai": "Custom Software & CRM Development",
  "technical-development-partner": "Technical Development Partner",
};

export const serviceUrls: Record<string, string> = {
  "mobile-app-development-dubai": SERVICE_PATHS.mobile,
  "app-rescue-maintenance": SERVICE_PATHS.rescue,
  "custom-software-development-dubai": SERVICE_PATHS.custom,
  "technical-development-partner": SERVICE_PATHS.partner,
};

export const portfolioToServices: Record<string, string[]> = {
  "Mobile Products": ["mobile-app-development-dubai", "technical-development-partner"],
  "E-commerce & Payments": ["mobile-app-development-dubai", "custom-software-development-dubai"],
  "Business Platforms": ["custom-software-development-dubai"],
  "Health & GovTech": ["mobile-app-development-dubai", "app-rescue-maintenance"],
  "Web Platforms": ["custom-software-development-dubai"],
};
