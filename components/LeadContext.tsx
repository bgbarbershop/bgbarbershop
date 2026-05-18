"use client";

import { createContext, useContext, useState } from "react";
import LeadModal from "./LeadModal";

const LeadContext = createContext<{ openLead: () => void }>({ openLead: () => {} });

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LeadContext.Provider value={{ openLead: () => setIsOpen(true) }}>
      {children}
      {isOpen && <LeadModal onClose={() => setIsOpen(false)} />}
    </LeadContext.Provider>
  );
}

export const useLead = () => useContext(LeadContext);
