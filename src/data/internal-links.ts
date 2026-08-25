import { SERVICE_PATHS } from "@/data/services-detail";

export const serviceNames: Record<string, string> = {
  "mobile-app-development-dubai": "Mobile App Development Dubai",
  "flutter-app-development-dubai": "Flutter App Development Dubai",
  "react-native-app-development-dubai": "React Native App Development Dubai",
  "app-rescue-maintenance": "App Rescue & Maintenance",
  "custom-software-development-dubai": "Custom Software & CRM Development",
  "technical-development-partner": "Technical Development Partner",
};

export const serviceUrls: Record<string, string> = {
  "mobile-app-development-dubai": SERVICE_PATHS.mobile,
  "flutter-app-development-dubai": SERVICE_PATHS.flutter,
  "react-native-app-development-dubai": SERVICE_PATHS.reactNative,
  "app-rescue-maintenance": SERVICE_PATHS.rescue,
  "custom-software-development-dubai": SERVICE_PATHS.custom,
  "technical-development-partner": SERVICE_PATHS.partner,
};

export const portfolioToServices: Record<string, string[]> = {
  "Mobile Products": [
    "mobile-app-development-dubai",
    "flutter-app-development-dubai",
    "technical-development-partner",
  ],
  "AI Products": ["custom-software-development-dubai", "technical-development-partner"],
  "E-commerce & Payments": ["mobile-app-development-dubai", "custom-software-development-dubai"],
  "Business Platforms": ["custom-software-development-dubai"],
  "Healthcare & GovTech": ["mobile-app-development-dubai", "app-rescue-maintenance"],
  "Web Platforms": ["custom-software-development-dubai"],
};

export const serviceToInsights: Record<string, string[]> = {
  "mobile-app-development-dubai": [
    "hire-flutter-developer-dubai",
    "mobile-app-cost-dubai",
    "flutter-vs-react-native-uae",
  ],
  "flutter-app-development-dubai": [
    "hire-flutter-developer-dubai",
    "flutter-vs-react-native-uae",
    "mobile-app-cost-dubai",
  ],
  "react-native-app-development-dubai": [
    "flutter-vs-react-native-uae",
    "take-over-unfinished-mobile-app",
    "hire-flutter-developer-dubai",
  ],
  "app-rescue-maintenance": [
    "take-over-unfinished-mobile-app",
    "hire-flutter-developer-dubai",
    "mobile-app-cost-dubai",
  ],
  "custom-software-development-dubai": ["mobile-app-cost-dubai"],
  "technical-development-partner": ["hire-flutter-developer-dubai", "take-over-unfinished-mobile-app"],
};
