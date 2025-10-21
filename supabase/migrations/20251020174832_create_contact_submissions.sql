/*
  # Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Full name of the person submitting the form
      - `email` (text, required) - Email address for follow-up
      - `phone` (text, optional) - Phone number for contact
      - `subject` (text, required) - Subject/category of the inquiry
      - `message` (text, required) - Message content from the user
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the inquiry (new, in_progress, resolved)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public users to insert their own submissions
    - Add policy for authenticated admin users to read all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
