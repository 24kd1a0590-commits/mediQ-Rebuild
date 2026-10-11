import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { 
  User, 
  Calendar, 
  FileText, 
  Stethoscope, 
  Users, 
  Clock, 
  ShieldCheck, 
  Layers, 
  BarChart3 
} from 'lucide-react';

import AppLayout from '../components/layout/AppLayout';
import WorkspaceLayout from '../components/layout/WorkspaceLayout';

// Home & Fallbacks
import HomePage from '../pages/Home/HomePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

// Patient Workspace Pages
import PatientDashboard from '../pages/Patient/PatientDashboard';
import PatientAppointments from '../pages/Patient/PatientAppointments';
import PatientPrescriptions from '../pages/Patient/PatientPrescriptions';

// Doctor Workspace Pages
import DoctorDashboard from '../pages/Doctor/DoctorDashboard';
import DoctorQueue from '../pages/Doctor/DoctorQueue';
import DoctorSchedule from '../pages/Doctor/DoctorSchedule';

// Admin Workspace Pages
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminQueueOps from '../pages/Admin/AdminQueueOps';
import AdminAnalytics from '../pages/Admin/AdminAnalytics';

const PATIENT_TABS = [
  { path: '/patient', label: 'My Queue & Status', exact: true, icon: User },
  { path: '/patient/appointments', label: 'Appointments', exact: false, icon: Calendar },
  { path: '/patient/prescriptions', label: 'Prescriptions (Rx)', exact: false, icon: FileText }
];

const DOCTOR_TABS = [
  { path: '/doctor', label: 'Consultation Desk', exact: true, icon: Stethoscope },
  { path: '/doctor/queue', label: 'Live Patient Queue', exact: false, icon: Users },
  { path: '/doctor/schedule', label: 'OPD Schedule', exact: false, icon: Clock }
];

const ADMIN_TABS = [
  { path: '/admin', label: 'Command Center', exact: true, icon: ShieldCheck },
  { path: '/admin/queue-ops', label: 'Queue Operations', exact: false, icon: Layers },
  { path: '/admin/analytics', label: 'Department Stats', exact: false, icon: BarChart3 }
];

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Home Portal */}
        <Route index element={<HomePage />} />

        {/* Patient Workspace Placeholder Routes */}
        <Route 
          path="patient" 
          element={
            <WorkspaceLayout
              roleTitle="Patient Workspace"
              roleSubtitle="Live token tracking, consultation queue, and medical history"
              icon={User}
              tabs={PATIENT_TABS}
              roleBadge="Patient"
            />
          }
        >
          <Route index element={<PatientDashboard />} />
          <Route path="appointments" element={<PatientAppointments />} />
          <Route path="prescriptions" element={<PatientPrescriptions />} />
        </Route>

        {/* Doctor Workspace Placeholder Routes */}
        <Route 
          path="doctor" 
          element={
            <WorkspaceLayout
              roleTitle="Doctor Consultation Desk"
              roleSubtitle="Triage queue management, clinical notes, and patient encounter flow"
              icon={Stethoscope}
              tabs={DOCTOR_TABS}
              roleBadge="Physician"
            />
          }
        >
          <Route index element={<DoctorDashboard />} />
          <Route path="queue" element={<DoctorQueue />} />
          <Route path="schedule" element={<DoctorSchedule />} />
        </Route>

        {/* Administrator Workspace Placeholder Routes */}
        <Route 
          path="admin" 
          element={
            <WorkspaceLayout
              roleTitle="Administrator Command Center"
              roleSubtitle="OPD queue load balancing, department analytics, and audit logging"
              icon={ShieldCheck}
              tabs={ADMIN_TABS}
              roleBadge="Operations"
            />
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="queue-ops" element={<AdminQueueOps />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
