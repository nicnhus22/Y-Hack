using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using TestMathematica;

namespace TestMathematica
{
    class MusicSheetGenerator
    {
        public static XmlDocument generateMusicSheet(List<Note> listNotes)
        {
            Note[] notes = listNotes.ToArray();
            int i = 0;

            XmlDocument sheet = new XmlDocument();
            sheet.Load("MusicSheetTemplate.xml");

            while (notes[i]._end < 4)
            {
                XmlDocument note = new XmlDocument();
                note.Load("NoteNodeTemplate.xml");
                note.SelectSingleNode("/note/pitch/step").InnerText = notes[i]._step;
                note.SelectSingleNode("/note/pitch/octave").InnerText = notes[i]._octave.ToString();

                int duration = notes[i]._end - notes[i]._start;
                note.SelectSingleNode("/note/duration").InnerText = duration.ToString();

                if (1 < duration && duration < 4) note.SelectSingleNode("note/type").InnerText = "half";
                else if (duration > 4) note.SelectSingleNode("note/type").InnerText = "whole";
                else note.SelectSingleNode("note/type").InnerText = "quarter";
                sheet.SelectSingleNode("/score-partwise/part/measure").AppendChild(sheet.ImportNode(note.DocumentElement, true));
                i++;
            }

            int currentTime;
            int currentMeasure = 1;

            while (notes.Length > i)
            {
                currentTime = notes[i]._start;
                if (currentMeasure * 4 < currentTime)
                {
                    ++currentMeasure;
                    XmlDocument measure = new XmlDocument();
                    measure.Load("MeasureTemplate.xml");
                    measure.SelectSingleNode("/measure").Attributes[0].Value = (currentMeasure).ToString();
                    sheet.SelectSingleNode("/score-partwise/part").AppendChild(sheet.ImportNode(measure.DocumentElement, true));
                }
                 
                XmlDocument note = new XmlDocument();
                note.Load("NoteNodeTemplate.xml");
                note.SelectSingleNode("/note/pitch/step").InnerText = notes[i]._step;
                note.SelectSingleNode("/note/pitch/octave").InnerText = notes[i]._octave.ToString();

                int duration = notes[i]._end - notes[i]._start;
                note.SelectSingleNode("/note/duration").InnerText = duration.ToString();

                if (1 < duration && duration < 4) note.SelectSingleNode("/note/type").InnerText = "half";
                else if (duration > 4) note.SelectSingleNode("/note/type").InnerText = "whole";
                else note.SelectSingleNode("/note/type").InnerText = "quarter";

                sheet.SelectSingleNode("/score-partwise/part/measure[@number='" + currentMeasure + "']").AppendChild(sheet.ImportNode(note.DocumentElement, true));
                i++;
            }
            sheet.Save("test.xml");
            Console.ReadLine();
            return sheet;
        }
    }
}
