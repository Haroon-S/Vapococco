'use client';

import { Box, Modal, Paper } from '@mui/material';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import JournalsTable from './components/JournalsTable';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import ModalHeader from '@/app/common/components/ModalHeader';
import AddEditJournalForm from './components/form/AddEditJournalForm';

function Journals({ searchParams }) {
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };
  return (
    <Paper sx={{ borderRadius: '10px' }} className=" py-14 px-8">
      <JournalsTable journalId={searchParams?.journalId} />
      <Modal open={isAddModalOpen} onClose={toggleAddModal}>
        <Box sx={{ ...formModalStyles, width: '900px' }}>
          <ModalHeader title="Journal instance" onClose={toggleAddModal} />
          <AddEditJournalForm toggleAddModal={toggleAddModal} />
        </Box>
      </Modal>
    </Paper>
  );
}

Journals.propTypes = {
  searchParams: propTypes.object,
};

export default Journals;
