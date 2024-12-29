---
layout: documentation
title: "Requirements Specification"
project: "Project Skillbridge"
short_description: "This document outlines the requirements for the SkillBridge platform, detailing the actual and target states, product use, and functional requirements."
image: "/assets/images/projects/Project1/project1DocuImage.png"

use_cases:
  - title: "Use Case 01"
    rows:
      - { label: "Name", value: "Skill Matchmaking" }
      - { label: "Short Description", value: "Enables users to search for people based on specific skills they need or offer." }
      - { label: "Actors", value: "Seeker (user searching for skills), Provider (user offering skills)." }
      - { label: "Trigger", value: "A seeker initiates a search for a skill." }
      - { label: "Results", value: "A list of matching providers is displayed to the seeker, filtered by the desired skill." }
      - { label: "Preconditions", value: "- The seeker must be registered and logged in.\n - Providers must have their skills listed in their profiles." }
      - { label: "Incoming Data", value: "Skill name or category, optional filters (tags, location)." }
      - { label: "Process Description", value: "1. Seeker enters a skill or selects a category. \n 2. System retrieves and displays a list of matching providers.\n 3. Seeker applies filters to narrow down the results." }
      - { label: "Error Behaviour", value: "- No matching providers found: Display a \"No results found\" message.\n- Network issues: Display a retry option." }
      - { label: "Variations", value: "- Seeker filters by tags (e.g., \"Beginner-friendly\").\n- Seeker searches by location." }
  - title: "Use Case 02"
    rows:
      - { label: "Name", value: "Profile Management" }
      - { label: "Short Description", value: "Allows users to register, log in, and manage their profiles as seekers or providers." }
      - { label: "Actors", value: "Seeker, Provider" }
      - { label: "Trigger", value: "A user registers or edits their profile." }
      - { label: "Results", value: "- Successful registration or profile update.\n- User role (seeker/provider) is saved." }
      - { label: "Preconditions", value: "- User must provide valid registration details (email, password, etc.)." }
      - { label: "Incoming Data", value: "Name, email, password, skills (if provider), role selection (seeker/provider)." }
      - { label: "Process Description", value: "1. User registers or logs in.\n2. User fills out or updates their profile (e.g., skills for providers).\n3. System validates and saves the information." }
      - { label: "Error Behaviour", value: "- Validation failure (e.g., missing fields, invalid email): Display error message.\n- Duplicate email: Prevent registration." }
      - { label: "Variations", value: "- User switches roles (e.g., from seeker to provider).\n- User adds or removes skills." }
  - title: "Use Case 03"
    rows:
      - { label: "Name", value: "Request/Response Flow" }
      - { label: "Short Description", value: "Enables seekers to send requests to providers, who can accept or reject them." }
      - { label: "Actors", value: "Seeker, Provider" }
      - { label: "Trigger", value: "A seeker selects a provider and sends a request." }
      - { label: "Results", value: "- Request is sent successfully.\n- Provider accepts/rejects the request.\n- Notification is sent to the seeker." }
      - { label: "Preconditions", value: "- Seeker must be logged in.\n- Provider must be active." }
      - { label: "Incoming Data", value: "Request details (e.g., skill needed, date/time)." }
      - { label: "Process Description", value: "1. Seeker selects a provider and sends a request.\n2. Provider receives the request and reviews details.\n3. Provider accepts or rejects.\n4. System notifies the seeker of the outcome." }
      - { label: "Error Behaviour", value: "- Request failure (e.g., provider inactive): Notify seeker.\n- Provider doesn’t respond: Automatically cancel request after a timeout." }
      - { label: "Variations", value: "- Provider accepts but reschedules.\n- Seeker cancels the request before provider responds." }
  - title: "Use Case 04"
    rows:
      - { label: "Name", value: "Categories and Filters" }
      - { label: "Short Description", value: "Allows seekers to refine their searches using categories and filters." }
      - { label: "Actors", value: "Seeker" }
      - { label: "Trigger", value: "Seeker applies a category or filter during a search." }
      - { label: "Results", value: "Display a refined list of providers based on selected filters." }
      - { label: "Preconditions", value: "- Seeker must be logged in.\n- Providers must have category or tag data." }
      - { label: "Incoming Data", value: "Categories, filters (e.g., tags, location)." }
      - { label: "Process Description", value: "1. Seeker performs a search.\n2. Seeker applies categories or filters.\n3. System updates and displays filtered results." }
      - { label: "Error Behaviour", value: "- No results found for the selected filters: Show a \"No results found\" message." }
      - { label: "Variations", value: "- Seeker removes or changes filters.\n- Seeker combines multiple filters." }
  - title: "Use Case 05"
    rows:
      - { label: "Name", value: "User Management" }
      - { label: "Short Description", value: "Admins can manage user accounts, block abusive users, or verify skills." }
      - { label: "Actors", value: "Admin" }
      - { label: "Trigger", value: "Admin views or updates user data." }
      - { label: "Results", value: "- User account is updated or blocked.\n- Skill verification status is updated." }
      - { label: "Preconditions", value: "Admin must be logged in." }
      - { label: "Incoming Data", value: "User information (e.g., email, role, status)." }
      - { label: "Process Description", value: "1. Admin views the user list.\n2. Admin selects a user and makes updates (e.g., blocks the user, verifies skills).\n3. System saves the updates." }
      - { label: "Error Behaviour", value: "- Database failure: Show \"Action failed\" message and allow retry." }
      - { label: "Variations", value: "- Admin filters users by role (e.g., seeker or provider).\n- Admin bulk-updates multiple users." }
  - title: "Use Case 06"
    rows:
      - { label: "Name", value: "Statistics Dashboard" }
      - { label: "Short Description", value: "Displays metrics such as the number of matches, popular skills, and user engagement." }
      - { label: "Actors", value: "Admin" }
      - { label: "Trigger", value: "Admin accesses the dashboard." }
      - { label: "Results", value: "- Admin views key metrics and reports." }
      - { label: "Preconditions", value: "- Admin must be logged in.\n- Data must be available in the database." }
      - { label: "Incoming Data", value: "None (data is fetched from the database)." }
      - { label: "Process Description", value: "1. Admin navigates to the dashboard.\n2. System queries and aggregates data.\n3. System displays statistics and charts." }
      - { label: "Error Behaviour", value: "- Data query fails: Show a fallback message like \"Data unavailable.\"" }
      - { label: "Variations", value: "- Admin customizes the displayed data (e.g., timeframe, metrics)." }
---

# Actual and target state

## Actual State
Currently, individuals seeking skill-based assistance or collaboration face significant challenges in connecting with the right people. Social media platforms or generic freelance marketplaces are often used, but these solutions lack:
- •	Targeted Matchmaking: There are no specialized tools to efficiently match users based on specific skills or needs.
- •	Skill Verification: Users cannot easily verify the credibility or expertise of a potential collaborator or helper.
- •	Structured Workflow: Existing platforms do not offer seamless workflows for managing requests, scheduling, or communication between seekers and providers.
- •	Insights for Administrators: There is limited visibility for platform administrators to monitor engagement, identify trends, and ensure fair usage.Furthermore, many existing solutions do not provide a categorized, filterable search functionality or flexible availability scheduling, leading to inefficiencies and unmet expectations.

## Target State
The goal of this project is to develop SkillBridge, a platform that bridges the gap between individuals needing skill-based assistance and those offering their expertise. The new solution will address the shortcomings of the current state by implementing the following features:
- •	Advanced Matchmaking: A targeted search functionality that allows users to find matches based on specific skills, categories, and tags.
- •	Profile Differentiation: Users can register as either seekers or providers, with distinct profile configurations tailored to their roles.
- •	Verified Skills: A skill verification process, managed by administrators, to enhance trust and credibility.
- •	Streamlined Request Flow: A request-and-response workflow that enables seekers to book sessions, and providers to manage their availability with minimal friction.
- •	Scheduling and Availability: Providers can define their availability slots, making it easier for seekers to schedule interactions.
- •	Comprehensive Admin Tools:
  o	Management of users (e.g., blocking abusive users, verifying skills).
  o	A dashboard to track platform statistics, such as popular skills, user engagement, and matches completed.
  By implementing these features, the platform will foster efficient collaboration, increase user trust, and provide a structured environment for skill sharing. The result will be a user-friendly, efficient, and scalable system tailored to individual needs.

## Target determination

### Goals
The primary objective of this project is to develop a platform, SkillBridge, which enables efficient matchmaking and collaboration between individuals seeking assistance and those offering skills. The platform aims to address the current gaps in skill-based networking and provide a seamless, feature-rich experience for all stakeholders.
2.	Specific and Measurable Goals
      The following goals have been identified, prioritized into Must-Have Goals, Optional Goals, and Non-Goals:
3.	Must-Have Goals (Critical for Project Success)
1.	Efficient Matchmaking:
      Users must be able to search for skill providers based on categories, tags, or specific expertise, ensuring results are relevant and filtered to meet their needs.
      Success Measure: Search results must display accurate matches within 2 seconds, filtered based on user-defined criteria.
2.	User Role Differentiation:
      Users must be able to register and manage their profiles as either seekers (those requesting skills) or providers (those offering skills).
      Success Measure: Profiles must display role-specific information (e.g., skills for providers) with role-based permissions.
3.	Request/Response Workflow:
      Seekers must be able to send requests to providers, and providers must have the ability to accept, reject, or reschedule the requests.
      Success Measure: Successful request submissions and responses must be tracked with an 85% completion rate for all interactions.
4.	Scheduling Support:
      Providers must be able to define and manage availability slots, allowing seekers to book time conveniently.
      Success Measure: Booking conflicts should be prevented with real-time updates.
5.	Skill Verification:
      Administrators must have the ability to verify user skills, enhancing credibility and trust within the platform.
      Success Measure: At least 90% of users should have verified skills within 30 days of registration.
6.	Statistics Dashboard:
      Administrators should have access to a dashboard displaying metrics like user activity, popular skills, and successful matches.
      Success Measure: Reports must be generated in under 5 seconds, showing real-time aggregated data.
7.	Responsive and Accessible Design:
      The platform must be accessible across devices, with a user-friendly interface for both web and mobile users.
      Success Measure: Pass Web Content Accessibility Guidelines (WCAG) Level AA compliance and display properly on devices with varying screen sizes.

#### 4.	Optional Goals (Enhance User Experience but Not Essential)
1.	Notification System:
      Send notifications (via email or in-app) to users for important events such as request updates, skill verification status, or new matches.
2.	Integration with External APIs:
      Integrate with free APIs, such as Google Calendar, to allow providers to sync their availability or seekers to schedule sessions seamlessly.
3.	Multi-Language Support:
      Provide multilingual support, allowing users to interact with the platform in their preferred language.

#### 5.	Non-Goals (Explicitly Excluded from Scope)
1.	Monetization Features:
      No payment or subscription systems will be implemented as part of this project. The platform will remain free to use.
2.	Comprehensive Skill Assessment:
      The project will not include detailed skill assessment or testing mechanisms for users. Verification will rely on administrative review.

#### 6.	Overarching Target
The project aims to empower users to efficiently manage their skill-based needs using an intuitive and robust platform. SkillBridge will serve as a reliable tool for facilitating connections, managing profiles, and organizing skill-sharing sessions in a structured, user-friendly manner. By achieving these goals, the platform will foster collaboration, trust, and accessibility within its community.


# Product use
This chapter defines the areas of application and target groups for SkillBridge, clarifying its intended usage and the demographics it aims to serve.

## Area of application
SkillBridge is designed as a versatile platform that can be used in various contexts, both professional and personal. Its areas of application include:
1.	Remote Collaboration:
      Facilitates virtual skill-sharing and mentoring sessions for individuals working remotely, enabling them to connect with experts worldwide.
2.	Educational Environments:
      Supports students, educators, and tutors by creating a platform to find and offer academic or technical assistance, such as programming help or language learning.
3.	Workplace Skill Development:
      Enables employees to seek guidance on technical tools, industry best practices, or career development from experienced professionals within or outside their organization.
4.	Community and Networking Events:
      Serves as a resource for skill exchange during hackathons, workshops, or local community meetups.
5.	Mobile and Desktop Accessibility:
      As a responsive web-based application, it can be accessed on both mobile devices and desktop browsers, ensuring convenience for on-the-go users.

## Target groups
SkillBridge is designed for a diverse audience, ranging from professionals to casual learners. The primary target groups include:
1.	Skill Seekers:
      Individuals or organizations needing specific expertise or guidance, such as:
      o	Students and Learners: Those seeking tutoring in academic subjects or programming.
      o	Job Seekers: Individuals wanting mentorship or help with interview preparation.
      o	Professionals: Employees requiring support in mastering new tools or solving technical problems.
2.	Skill Providers:
      Experts and professionals offering their skills, such as:
      o	Freelancers: Looking to share their expertise while building a personal network.
      o	Educators and Mentors: Offering tutoring, workshops, or advice in their areas of expertise.
3.	Administrators:
      Platform moderators and organization staff responsible for managing user accounts, ensuring platform safety, and tracking system performance.
4.	Community Groups and Event Organizers:
      Using the platform to coordinate skill-sharing sessions, foster community learning, or support local initiatives.

### Overview of target groups
The platform primarily serves students, freelancers, professionals, and mentors by enabling them to connect and collaborate easily. Through its user-friendly interface, even individuals with minimal IT knowledge can navigate the platform effectively. Additionally, the platform’s accessibility features ensure inclusivity for users with varying levels of expertise and abilities.

# Functional requirements
## Features

## Use-Case Diagram

## Use-Case Descriptions

{% for use_case in page.use_cases %}
### {{ use_case.title }}
<table class="documentation-table">
    <thead>
    <tr>
        <th colspan="2">{{ use_case.title }}</th>
    </tr>
    </thead>
    <tbody>
    {% for row in use_case.rows %}
    <tr>
        <td>{{ row.label }}</td>
        <td>{{ row.value }}</td>
    </tr>
    {% endfor %}
    </tbody>
</table>
{% endfor %}

# Non-functional requirements