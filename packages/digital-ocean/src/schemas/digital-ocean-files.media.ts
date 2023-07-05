import { defineField } from 'sanity'
import { Rule } from '@sanity/types'
import Input from '../components/Input'

export default defineField({
  name: 'digital-ocean-files.media',
  title: 'Digital Ocean media',
  type: 'object',
  components: {
    input: Input as any,
  },
  fields: [
    {
      name: 'asset',
      title: 'Asset',
      type: 'reference',
      to: [{ type: 'digital-ocean-files.storedFile' }],
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
})
