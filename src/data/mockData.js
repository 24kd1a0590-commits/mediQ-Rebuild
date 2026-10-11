/**
 * Realistic synthetic demo dataset for MediQ Milestone 1.
 * NOTE: Contains ONLY mock demonstration data. No real patient data.
 */

export const MOCK_CLINIC_INFO = {
  name: "MediQ Central Health Pavilion",
  tagline: "Integrated Outpatient & Queue Operations",
  address: "742 Medical Center Parkway, Suite 400",
  currentDate: "October 9, 2026",
  operatingHours: "08:00 AM - 08:00 PM",
  activeDepartments: 6,
  doctorsOnDuty: 14,
  patientsInQueue: 38,
  averageWaitTimeMin: 18
};

export const MOCK_PATIENT_DATA = {
  id: "PAT-88219",
  name: "Sarah Jenkins",
  age: 34,
  gender: "Female",
  bloodGroup: "A+",
  tokenNumber: "T-042",
  department: "General Medicine & Triage",
  estimatedWait: "12 mins",
  queuePosition: 3,
  assignedDoctor: "Dr. Marcus Vance, MD",
  roomNumber: "Consultation Suite 104",
  status: "In Queue",
  upcomingAppointments: [
    {
      id: "APT-101",
      date: "Oct 12, 2026",
      time: "10:30 AM",
      doctor: "Dr. Emily Chen",
      specialty: "Cardiology",
      location: "East Wing - Room 208",
      status: "Confirmed"
    },
    {
      id: "APT-102",
      date: "Oct 28, 2026",
      time: "02:15 PM",
      doctor: "Dr. Marcus Vance",
      specialty: "General Wellness",
      location: "Main OPD - Room 104",
      status: "Scheduled"
    }
  ],
  prescriptions: [
    {
      id: "RX-901",
      medication: "Amoxicillin 500mg",
      dosage: "1 tablet 3x daily with meals",
      duration: "7 Days",
      prescribedBy: "Dr. Marcus Vance",
      date: "Oct 05, 2026",
      refills: 0,
      status: "Active"
    },
    {
      id: "RX-884",
      medication: "Loratadine 10mg",
      dosage: "1 tablet once daily in morning",
      duration: "30 Days",
      prescribedBy: "Dr. Emily Chen",
      date: "Sep 20, 2026",
      refills: 2,
      status: "Active"
    }
  ]
};

export const MOCK_DOCTOR_DATA = {
  id: "DOC-014",
  name: "Dr. Marcus Vance",
  title: "Senior Physician, Internal Medicine",
  room: "Suite 104",
  status: "Available",
  stats: {
    totalPatientsToday: 24,
    completedConsultations: 16,
    pendingInQueue: 8,
    avgConsultationTimeMin: 14
  },
  currentPatient: {
    token: "T-039",
    name: "Robert Diaz",
    age: 48,
    gender: "Male",
    reason: "Hypertension follow-up & routine labs",
    vitalSigns: "BP 132/84, HR 72, SpO2 98%",
    status: "In Consultation"
  },
  queueList: [
    {
      token: "T-040",
      name: "David Kim",
      age: 29,
      gender: "Male",
      arrivalTime: "11:15 AM",
      category: "Priority - Fever",
      status: "Waiting"
    },
    {
      token: "T-041",
      name: "Anita Sharma",
      age: 52,
      gender: "Female",
      arrivalTime: "11:20 AM",
      category: "Standard Consultation",
      status: "Waiting"
    },
    {
      token: "T-042",
      name: "Sarah Jenkins",
      age: 34,
      gender: "Female",
      arrivalTime: "11:25 AM",
      category: "Follow-up",
      status: "Next Up"
    },
    {
      token: "T-043",
      name: "James Wilson",
      age: 61,
      gender: "Male",
      arrivalTime: "11:32 AM",
      category: "Prescription Renewal",
      status: "Waiting"
    }
  ]
};

export const MOCK_ADMIN_DATA = {
  systemHealth: "Operational",
  lastSync: "Just now",
  overviewStats: {
    totalFootfallToday: 215,
    activeQueuedPatients: 38,
    averageWaitTimeMin: 18.5,
    onDutyPhysicians: 14,
    roomsOccupied: "12 / 16",
    queueThroughputRate: "94%"
  },
  departments: [
    {
      id: "DEP-01",
      name: "General Medicine & Triage",
      activeDoctors: 4,
      queueCount: 12,
      avgWaitMin: 15,
      status: "Normal"
    },
    {
      id: "DEP-02",
      name: "Pediatrics & Child Care",
      activeDoctors: 3,
      queueCount: 9,
      avgWaitMin: 22,
      status: "Moderate Load"
    },
    {
      id: "DEP-03",
      name: "Cardiology & Vascular",
      activeDoctors: 2,
      queueCount: 5,
      avgWaitMin: 12,
      status: "Normal"
    },
    {
      id: "DEP-04",
      name: "Orthopedics & Joint Clinic",
      activeDoctors: 3,
      queueCount: 8,
      avgWaitMin: 26,
      status: "High Wait"
    },
    {
      id: "DEP-05",
      name: "Diagnostics & Imaging",
      activeDoctors: 2,
      queueCount: 4,
      avgWaitMin: 8,
      status: "Optimal"
    }
  ],
  systemAuditLogs: [
    { id: "LOG-501", timestamp: "11:35 AM", event: "Token T-039 called to Suite 104", level: "info" },
    { id: "LOG-502", timestamp: "11:30 AM", event: "Doctor Dr. H. Patel checked in to Suite 202", level: "success" },
    { id: "LOG-503", timestamp: "11:24 AM", event: "Emergency Priority assigned to Token T-038", level: "warning" },
    { id: "LOG-504", timestamp: "11:15 AM", event: "Pharmacy dispense completed for Token T-031", level: "info" }
  ]
};
