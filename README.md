# React Native Calendar App with Natural Language Processing

This app allows you to input events using natural language through voice input or by copying and pasting text. The app uses the OpenAI ChatGPT API to automatically process the input and return event details in JSON format, which can be directly used to populate your calendar.

### Features:
- **Natural Language Processing (NLP)**: Input event details via text or voice, and the app automatically processes and extracts the event's information.
- **Smart Reminders**: Based on the event type (in-person or online), the app will automatically set the appropriate reminder time:
  - In-person events will have a reminder set 1-2 hours before the event.
  - Online events will have a reminder set 5-10 minutes before the event.
- **Integration with Calendar**: The processed event is seamlessly added to your calendar with the correct reminder times.

---

## Requirements

- React Native
- OpenAI API (for ChatGPT)

---

## Usage

1. **Voice Input**: Speak your event details (e.g., "Meeting with John at 3 PM tomorrow").
2. **Text Input**: Copy-paste your event details into the app (e.g., "Team meeting, in-person, at 4 PM on Friday").

The app will send the input to the ChatGPT API, which will analyze the text and return the following information in JSON format:
- **Event Name**: Extracted from input
- **Event Date**: Date and time parsed from input
- **Event Type**: Identifies if the event is in-person or online
- **Reminder Time**: Automatically set based on the event type

The event will be added to your calendar with the appropriate reminder.

### Example JSON response from ChatGPT API:
```json
{
  "event_name": "Team Meeting",
  "event_date": "2025-02-20T16:00:00",
  "event_type": "in-person",
  "reminder_time": "2025-02-20T14:00:00"
}

## Smart Reminder Logic

The app uses simple rules to determine the reminder time:
- **In-person events**: Reminder is set 1-2 hours before the event.
- **Online events**: Reminder is set 5-10 minutes before the event.

---

## Example Scenario

You input: "Doctor appointment at 10 AM on Thursday."

ChatGPT processes it and returns a JSON object like:
```json
{
  "event_name": "Doctor Appointment",
  "event_date": "2025-02-22T10:00:00",
  "event_type": "in-person",
  "reminder_time": "2025-02-22T08:00:00"
}
