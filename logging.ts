{
  timestamp: string; // Time when the log was recorded
  level: 'info' | 'error' | 'warn'; // Severity level of the log
  message: string; // Log message description
  context?: Record<string, any>; // Optional additional information
}
