import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'

const titles = [
  'Inicio (Local)',
  'Fin (Local)',
  'Inicio (UTC)',
  'Fin (UTC)',
  'Actividad',
  'Lugar',
  'Asistentes',
  'Patrocinado por'
]
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2d3142',
    color: theme.palette.common.white
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: '#2d3142',
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

export interface RowData {
  r1: string
  r2: string
  r3: string
  r4: string
  r5: string
  r6: string
  r7: string
  r8: string
}

export interface Props {
  Rows: RowData[]
}

export const AgendaTable: React.FC<Props> = ({ Rows }) => {
  return (
    <Box width={'100%'}>
      <Paper sx={{ width: '100%', minWidth: '900px' }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {titles.map(title => (
                <StyledTableCell key={title} align="center">
                  <Typography variant="subtitle2">{title}</Typography>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Rows.map(row => (
              <StyledTableRow key={row.r1}>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r1}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r2}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r3}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r4}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r5}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r6}</Typography>
                  {(row.r6 === 'Auditorio M, ITESO' ||
                    row.r6 === 'Auditorio M') && (
                    <YouTubeIcon style={{ color: 'red' }} />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r7}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body2">{row.r8}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  )
}

export default AgendaTable
