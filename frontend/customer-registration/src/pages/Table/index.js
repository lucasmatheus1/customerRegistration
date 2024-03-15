import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TextField,
} from '@material-ui/core';
import dataJson from './data.js';

const useStyles = makeStyles({
  tableContainer: {
    width: '1250px',
    minWidth: '1250px',
    overflowX: 'auto',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    background: '#fff',
  },
});

const DataTable = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState({});
  const [data, setData] = useState(dataJson);

  const handleFilterChange = (columnName, value) => {
    setFilter({ ...filter, [columnName]: value });
  };

  const renderFilter = (columnName, columnLabel) => {
    return (
      <TextField
        label=''
        variant="outlined"
        value={filter[columnName] || ''}
        onChange={(e) => handleFilterChange(columnName, e.target.value)}
      />
    );
  };

  const calculateColumnTotal = (columnName) => {
    let total = 0;
    data.forEach((row) => {
      const value = parseFloat(
        row[columnName].replace(/[^\d,-]/g, '').replace(',', '.')
      );
      if (!isNaN(value)) {
        total += value;
      }
    });
    return total.toFixed(2);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Empresa</TableCell>
            <TableCell>Consultor</TableCell>
            <TableCell>PANL</TableCell>
            <TableCell>HS</TableCell>
            <TableCell>Hora Média</TableCell>
            <TableCell>Mensalidade</TableCell>
            <TableCell>Total Mensal do Cliente</TableCell>
            <TableCell>Total Acumulado Cliente</TableCell>
            <TableCell>Mensalidade Nova</TableCell>
            <TableCell>Hora Média Nova</TableCell>
            <TableCell>Horas R</TableCell>
            <TableCell>PNL R</TableCell>
            <TableCell>DRE R</TableCell>
            <TableCell>RA Vendas R</TableCell>
            <TableCell>RA Clientes R</TableCell>
            <TableCell>RA PetShop R</TableCell>
            <TableCell>RA Fluxo de Caixa R</TableCell>
            <TableCell>Total do Contrato 24M</TableCell>
            <TableCell>Integração</TableCell>
            <TableCell>Data Churn</TableCell>
            <TableCell>Meses</TableCell>
            <TableCell>Dias</TableCell>
            <TableCell>SetUp Mes</TableCell>
            <TableCell>Hera Mes</TableCell>
            <TableCell>BPO Mes</TableCell>
            <TableCell>Finpet Mes</TableCell>
            <TableCell>SetUp Acum</TableCell>
            <TableCell>Hera Acum</TableCell>
            <TableCell>BPO Acum</TableCell>
            <TableCell>Finpet Acum</TableCell>
            <TableCell>Proprietário Gestor</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>UF</TableCell>
            <TableCell>RG</TableCell>
            <TableCell>Faturamento Médio Mensal</TableCell>
            <TableCell>Variável</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Ponto Zero</TableCell>
            <TableCell>Sistema Operacional</TableCell>
            <TableCell>Oficina Metodologia</TableCell>
            <TableCell>Diagnóstico Realizado</TableCell>
            <TableCell>Análise Crítica</TableCell>
            <TableCell>Parametrização de Sistemas</TableCell>
            <TableCell>Precificação</TableCell>
            <TableCell>Atendimento Recepção</TableCell>
            <TableCell>Atendimento Rec Inativos</TableCell>
            <TableCell>Planejamento Estratégico</TableCell>
            <TableCell>Identidade Corporativa</TableCell>
            <TableCell>Valuation</TableCell>
            <TableCell>Pesquisa de Clima</TableCell>
            <TableCell>Pesquisa NPS</TableCell>
            <TableCell>Análise de Perfil</TableCell>
            <TableCell>Pesquisa de Mercado</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{renderFilter('id', 'ID')}</TableCell>
            <TableCell>{renderFilter('empresa', 'Empresa')}</TableCell>
            <TableCell>{renderFilter('consultor', 'Consultor')}</TableCell>
            <TableCell>{renderFilter('panl', 'PAINEL')}</TableCell>
            <TableCell>{renderFilter('hs', 'HS')}</TableCell>
            <TableCell>{renderFilter('horaMdia', 'Hora Média')}</TableCell>
            <TableCell>{renderFilter('mensalidade', 'Mensalidade')}</TableCell>
            <TableCell>{renderFilter('totalMensalDoCliente', 'Total Mensal do Cliente')}</TableCell>
            <TableCell>{renderFilter('totalAcumuladoCliente', 'Total Acumulado Cliente')}</TableCell>
            <TableCell>{renderFilter('mensalidadeNova', 'Mensalidade Nova')}</TableCell>
            <TableCell>{renderFilter('horaMdiaNova', 'Hora Média Nova')}</TableCell>
            <TableCell>{renderFilter('horasR', 'Horas R')}</TableCell>
            <TableCell>{renderFilter('pnlR', 'PNL R')}</TableCell>
            <TableCell>{renderFilter('dreR', 'DRE R')}</TableCell>
            <TableCell>{renderFilter('raVendasR', 'RA Vendas R')}</TableCell>
            <TableCell>{renderFilter('raClientesR', 'RA Clientes R')}</TableCell>
            <TableCell>{renderFilter('raPetShopR', 'RA PetShop R')}</TableCell>
            <TableCell>{renderFilter('raFluxoDeCaixaR', 'RA Fluxo de Caixa R')}</TableCell>
            <TableCell>{renderFilter('totalDoContrato24M', 'Total do Contrato 24M')}</TableCell>
            <TableCell>{renderFilter('integrao', 'Integração')}</TableCell>
            <TableCell>{renderFilter('dataChurn', 'Data Churn')}</TableCell>
            <TableCell>{renderFilter('mses', 'Meses')}</TableCell>
            <TableCell>{renderFilter('dias', 'Dias')}</TableCell>
            <TableCell>{renderFilter('setUpMes', 'SetUp Mes')}</TableCell>
            <TableCell>{renderFilter('heraMes', 'Hera Mes')}</TableCell>
            <TableCell>{renderFilter('bpoMes', 'BPO Mes')}</TableCell>
            <TableCell>{renderFilter('finpetMes', 'Finpet Mes')}</TableCell>
            <TableCell>{renderFilter('setUpAcum', 'SetUp Acum')}</TableCell>
            <TableCell>{renderFilter('heraAcum', 'Hera Acum')}</TableCell>
            <TableCell>{renderFilter('bpoAcum', 'BPO Acum')}</TableCell>
            <TableCell>{renderFilter('finpetAcum', 'Finpet Acum')}</TableCell>
            <TableCell>{renderFilter('proprietrioGestor', 'Proprietário Gestor')}</TableCell>
            <TableCell>{renderFilter('telefone', 'Telefone')}</TableCell>
            <TableCell>{renderFilter('endereo', 'Endereço')}</TableCell>
            <TableCell>{renderFilter('uf', 'UF')}</TableCell>
            <TableCell>{renderFilter('rg', 'RG')}</TableCell>
            <TableCell>{renderFilter('fatMdioMensal', 'Faturamento Médio Mensal')}</TableCell>
            <TableCell>{renderFilter('varivel', 'Variável')}</TableCell>
            <TableCell>{renderFilter('status', 'Status')}</TableCell>
            <TableCell>{renderFilter('pontoZero', 'Ponto Zero')}</TableCell>
            <TableCell>{renderFilter('sistemaOperacional', 'Sistema Operacional')}</TableCell>
            <TableCell>{renderFilter('oficinaMetodologia', 'Oficina Metodologia')}</TableCell>
            <TableCell>{renderFilter('diagnsticoRealizado', 'Diagnóstico Realizado')}</TableCell>
            <TableCell>{renderFilter('anliseCrtica', 'Análise Crítica')}</TableCell>
            <TableCell>{renderFilter('parametrizaoDeSistemas', 'Parametrização de Sistemas')}</TableCell>
            <TableCell>{renderFilter('precificao', 'Precificação')}</TableCell>
            <TableCell>{renderFilter('atendimentoRecepo', 'Atendimento Recepção')}</TableCell>
            <TableCell>{renderFilter('atendimentoRecinativos', 'Atendimento Rec Inativos')}</TableCell>
            <TableCell>{renderFilter('planejamentoEstratgico', 'Planejamento Estratégico')}</TableCell>
            <TableCell>{renderFilter('identidadeCorporativa', 'Identidade Corporativa')}</TableCell>
            <TableCell>{renderFilter('valuation', 'Valuation')}</TableCell>
            <TableCell>{renderFilter('pesquisaDeClima', 'Pesquisa de Clima')}</TableCell>
            <TableCell>{renderFilter('pesquisaNps', 'Pesquisa NPS')}</TableCell>
            <TableCell>{renderFilter('anliseDePerfil', 'Análise de Perfil')}</TableCell>
            <TableCell>{renderFilter('pesquisaDeMercado', 'Pesquisa de Mercado')}</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter((row) => {
              for (const key in filter) {
                if (
                  filter.hasOwnProperty(key) &&
                  filter[key] !== '' &&
                  String(row[key])
                    .toLowerCase()
                    .indexOf(String(filter[key]).toLowerCase()) === -1
                ) {
                  return false;
                }
              }
              return true;
            })
            .map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell>{row.id}</TableCell>
            <TableCell>{row.empresa}</TableCell>
            <TableCell>{row.consultor}</TableCell>
            <TableCell>{row.panl}</TableCell>
            <TableCell>{row.hs}</TableCell>
            <TableCell>{row.horaMdia}</TableCell>
            <TableCell>{row.mensalidade}</TableCell>
            <TableCell>{row.totalMensalDoCliente}</TableCell>
            <TableCell>{row.totalAcumuladoCliente}</TableCell>
            <TableCell>{row.mensalidadeNova}</TableCell>
            <TableCell>{row.horaMdiaNova}</TableCell>
            <TableCell>{row.horasR}</TableCell>
            <TableCell>{row.pnlR}</TableCell>
            <TableCell>{row.dreR}</TableCell>
            <TableCell>{row.raVendasR}</TableCell>
            <TableCell>{row.raClientesR}</TableCell>
            <TableCell>{row.raPetShopR}</TableCell>
            <TableCell>{row.raFluxoDeCaixaR}</TableCell>
            <TableCell>{row.totalDoContrato24M}</TableCell>
            <TableCell>{row.integrao}</TableCell>
            <TableCell>{row.dataChurn}</TableCell>
            <TableCell>{row.mses}</TableCell>
            <TableCell>{row.dias}</TableCell>
            <TableCell>{row.setUpMes}</TableCell>
            <TableCell>{row.heraMes}</TableCell>
            <TableCell>{row.bpoMes}</TableCell>
            <TableCell>{row.finpetMes}</TableCell>
            <TableCell>{row.setUpAcum}</TableCell>
            <TableCell>{row.heraAcum}</TableCell>
            <TableCell>{row.bpoAcum}</TableCell>
            <TableCell>{row.finpetAcum}</TableCell>
            <TableCell>{row.proprietrioGestor}</TableCell>
            <TableCell>{row.telefone}</TableCell>
            <TableCell>{row.endereo}</TableCell>
            <TableCell>{row.uf}</TableCell>
            <TableCell>{row.rg}</TableCell>
            <TableCell>{row.fatMdioMensal}</TableCell>
            <TableCell>{row.varivel}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.pontoZero}</TableCell>
            <TableCell>{row.sistemaOperacional}</TableCell>
            <TableCell>{row.oficinaMetodologia}</TableCell>
            <TableCell>{row.diagnsticoRealizado}</TableCell>
            <TableCell>{row.anliseCrtica}</TableCell>
            <TableCell>{row.parametrizaoDeSistemas}</TableCell>
            <TableCell>{row.precificao}</TableCell>
            <TableCell>{row.atendimentoRecepo}</TableCell>
            <TableCell>{row.atendimentoRecinativos}</TableCell>
            <TableCell>{row.planejamentoEstratgico}</TableCell>
            <TableCell>{row.identidadeCorporativa}</TableCell>
            <TableCell>{row.valuation}</TableCell>
            <TableCell>{row.pesquisaDeClima}</TableCell>
            <TableCell>{row.pesquisaNps}</TableCell>
            <TableCell>{row.anliseDePerfil}</TableCell>
            <TableCell>{row.pesquisaDeMercado}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
